import { Configuration, OpenAIApi } from 'openai';
import express from 'express';
import * as dotenv from 'dotenv';
import { formatPrompt, formatValidationErrors } from './format.js';
import { logger } from './logger.js';
import { validate } from './validation.js';

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
  logger.info('Generate endpoint called');

  const { error } = validate(req.body);
  if (error) {
    const errors = formatValidationErrors(error);
    return res.status(400).json({ message: 'Bad request', errors });
  }

  try {
    const { email, tone, interested } = req.body;
    const result = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: formatPrompt(email, tone, interested),
      max_tokens: 256,
      top_p: 1.0,
      stop: ['"""'],
    });

    res.json(result.data);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: 'An unexpected error occured' });
  }
});

// Listen
const port = process.env.PORT ?? 3000;
app.listen(port, () => console.log('Listening...'));
