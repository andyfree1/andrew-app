import Anthropic from '@anthropic-ai/sdk';
import { AIMessage } from '../../types/ai';

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
});

export async function generateResponse(messages: AIMessage[]): Promise<string> {
  try {
    const response = await anthropic.messages.create({
      model: "claude-3-opus-20240229",
      max_tokens: 1024,
      messages: messages.map(msg => ({
        role: msg.isBot ? "assistant" : "user",
        content: msg.text
      })),
      system: "You are Andrew's AI assistant for Press Play Films. Be professional, knowledgeable, and helpful while maintaining the company's creative and innovative spirit."
    });

    return response.content[0].text;
  } catch (error) {
    console.error('Anthropic API error:', error);
    throw new Error('Failed to generate response');
  }
}