export function formatPrompt(email, tone, interested) {
  email = JSON.stringify(email); // Todo: Should encode string here instead
  const prompt =
    email +
    `\nWrite a ${tone} reply to the email above saying that I am ${
      interested ? 'interested' : 'not interested'
    }`;
  return prompt;
}

export function formatValidationErrors(error) {
  return error.details.map((e) => e.message);
}
