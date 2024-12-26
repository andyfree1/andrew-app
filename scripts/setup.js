import { execSync } from 'child_process';
import fs from 'fs';

// Install dependencies
console.log('Installing dependencies...');
execSync('npm install -g wrangler @cloudflare/workers-types', { stdio: 'inherit' });

// Create necessary directories
const dirs = ['dist', 'public/assets'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate email server configuration
console.log('Generating email configuration...');
const emailConfig = `
server {
    listen 80;
    server_name mail.pressplay.lv;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name mail.pressplay.lv;

    ssl_certificate /etc/letsencrypt/live/pressplay.lv/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/pressplay.lv/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:8025;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
`;

fs.writeFileSync('email-server.conf', emailConfig);

// Generate deployment script
console.log('Creating deployment script...');
const deployScript = `
#!/bin/bash

# Build the project
npm run build

# Deploy to Cloudflare
wrangler deploy

# Setup SSL certificates
certbot certonly --nginx -d pressplay.lv -d www.pressplay.lv -d mail.pressplay.lv -d api.pressplay.lv

# Configure email server
sudo cp email-server.conf /etc/nginx/sites-available/mail.pressplay.lv
sudo ln -s /etc/nginx/sites-available/mail.pressplay.lv /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

echo "Deployment complete! Don't forget to:"
echo "1. Configure DNS records for email"
echo "2. Set up SPF and DKIM records"
echo "3. Configure your email client"
`;

fs.writeFileSync('deploy.sh', deployScript);
execSync('chmod +x deploy.sh');

// Update package.json scripts
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
packageJson.scripts = {
  ...packageJson.scripts,
  "deploy": "./deploy.sh",
  "setup": "node scripts/setup.js"
};

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));