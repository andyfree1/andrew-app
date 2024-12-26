interface CompanyBrand {
  name: string;
  url: string;
  color: string;
  textColor?: string;
}

export const companyBrands: Record<string, CompanyBrand> = {
  'Chat GPT': {
    name: 'ChatGPT',
    url: 'https://chat.openai.com',
    color: '#10a37f'
  },
  'Anthropic': {
    name: 'Anthropic',
    url: 'https://www.anthropic.com',
    color: '#0066FF'
  },
  'Gemini': {
    name: 'Google Gemini',
    url: 'https://deepmind.google/technologies/gemini/',
    color: '#4285f4'
  },
  'NVIDIA': {
    name: 'NVIDIA AI',
    url: 'https://www.nvidia.com/en-us/ai-data-science/',
    color: '#76b900'
  },
  'Runway ML': {
    name: 'Runway',
    url: 'https://runwayml.com',
    color: '#000000',
    textColor: '#ffffff'
  },
  'DALL-E': {
    name: 'DALL·E',
    url: 'https://openai.com/dall-e-3',
    color: '#FF9500'
  },
  'SORA': {
    name: 'SORA',
    url: 'https://openai.com/sora',
    color: '#0066FF'
  },
  'MidJourney': {
    name: 'MidJourney',
    url: 'https://www.midjourney.com',
    color: '#000000',
    textColor: '#ffffff'
  },
  'Zapier': {
    name: 'Zapier AI',
    url: 'https://zapier.com/ai',
    color: '#FF4A00'
  },
  'Jasper': {
    name: 'Jasper',
    url: 'https://www.jasper.ai',
    color: '#FF7A00'
  },
  'Tony Robbins': {
    name: 'Tony Robbins',
    url: 'https://www.tonyrobbins.com',
    color: '#003366'
  },
  'Jordan Belfort': {
    name: 'Jordan Belfort',
    url: 'https://jordanbelfort.com',
    color: '#1a1a1a'
  },
  'Joe Verde': {
    name: 'Joe Verde',
    url: 'https://www.joeverde.com',
    color: '#004d99'
  },
  'Tom Hopkins': {
    name: 'Tom Hopkins',
    url: 'https://www.tomhopkins.com',
    color: '#2c5282'
  }
};