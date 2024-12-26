import { personalInfo } from '../data/knowledge-base';
import { marked } from 'marked';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
});

async function getAnthropicResponse(query: string): Promise<string> {
  try {
    const message = await anthropic.messages.create({
      model: "claude-3-opus-20240229",
      max_tokens: 1024,
      messages: [{
        role: "user",
        content: query
      }],
      system: "You are Andrew's AI assistant for Press Play Films. Be professional, knowledgeable, and helpful while maintaining the company's creative and innovative spirit."
    });

    return message.content[0].text;
  } catch (error) {
    console.error('Anthropic API error:', error);
    throw new Error('Failed to generate response');
  }
}

export async function generateAIResponse(query: string): Promise<string> {
  try {
    const response = await getAnthropicResponse(query);
    return marked(response);
  } catch (error) {
    return marked("I apologize, but I'm having trouble connecting to my AI services. Please try again in a moment.");
  }
}