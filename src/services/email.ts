import { emailConfig } from '../config/email';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<Response> {
  return fetch(emailConfig.formEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      to: emailConfig.fromAddress,
      from: emailConfig.fromAddress,
    }),
  });
}