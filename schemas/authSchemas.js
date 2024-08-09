import Joi from "joi";
import { emailRegExp } from "../authConstants.js/authConstants.js";
import { passwordRegExp } from "../authConstants.js/authConstants.js";

export const authSignupSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().pattern(passwordRegExp).required(),
});
