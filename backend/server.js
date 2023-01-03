import { Configuration, OpenAIApi } from 'openai';
import express from 'express';
import * as dotenv from 'dotenv';

// Setup
dotenv.config({ path: '../.env' });
const app = express();
const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_KEY })
);

// Middleware
app.use(express.json());

// Routes
app.get('/api/generate-reply', async (req, res) => {
  const result = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt:
      'Hey Matthew,\nCan you please set up a meeting for 9am on Thursday?\nThanks, John.\n"""Write a respectful reply to the email above saying that I am uninterested:',
    temperature: 0,
    max_tokens: 256,
    top_p: 1.0,
    stop: ['"""'],
  });
  res.json(result.data);
});

// Listen
const port = process.env.PORT ?? 3000;
app.listen(port, () => console.log('Listening...'));
