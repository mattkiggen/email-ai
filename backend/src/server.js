import { Configuration, OpenAIApi } from 'openai';
import express from 'express';
import * as dotenv from 'dotenv';
import { format } from './format.js';

// Setup
dotenv.config({ path: '../.env' });
const app = express();
const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_KEY })
);

// Middleware
app.use(express.json());

// Routes
app.post('/api/generate', async (req, res) => {
  const { email, tone, interested } = req.body;
  const prompt = format(email, tone, interested);

  const result = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 256,
    top_p: 1.0,
    stop: ['"""'],
  });

  res.json(result.data);
});

// Listen
const port = process.env.PORT ?? 3000;
app.listen(port, () => console.log('Listening...'));
