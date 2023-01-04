import joi from 'joi';

const schema = joi.object({
  email: joi.string().required(),
  tone: joi.string().required().valid('respectful', 'casual', 'excited'),
  interested: joi.boolean().required(),
});

export function validate(requestBody) {
  return schema.validate(requestBody, { abortEarly: false });
}
