import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log(process.env['OPENAI_API_KEY'])
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-4o-mini',
  });

  chatCompletion.choices.forEach((choice) => {
    console.log(choice.message?.content);
  });

  res.status(200).json({
    message: 'Hello world',
    cookies: req.cookies,
  })
}
