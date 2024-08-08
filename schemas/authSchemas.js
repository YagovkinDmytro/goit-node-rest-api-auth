import Joi from "joi";
import { emailRegexp } from "../authConstants.js/authConstants.js";

export const authSignupSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().required(),
});
