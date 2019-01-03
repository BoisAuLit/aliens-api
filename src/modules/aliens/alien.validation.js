import Joi from 'joi';

/**
 * Password validator, rules:
 * 1. At least 6 characters
 * 2. Must contain at least one upper case letter
 */

export const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

export default {
  signup: {
    login: Joi.string().required(),
    password: Joi.string().regex(passwordReg).required(),
    name: Joi.string().required(),
    age: Joi.number().integer().positive().required(),
    race: Joi.string().required(),
    food: Joi.string().required(),
  }
}
