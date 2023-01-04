export function format(email, tone, interested = true) {
  email = JSON.stringify(email); // Should encode string here instead
  const prompt =
    email +
    `\nWrite a ${tone} reply to the email above saying that I am ${
      interested ? 'interested' : 'not interested'
    }`;
  return prompt;
}
