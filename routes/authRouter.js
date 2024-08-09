import { Router } from "express";
import authControllers from "../controllers/authControllers.js";
import validateBody from "../decorators/validateBody.js";
import { authSignupSchema } from "../schemas/authSchemas.js";

const signupMiddleware = validateBody(authSignupSchema);

const authRouter = Router();

authRouter.post("/register", signupMiddleware, authControllers.signup);
authRouter.post("/login", signupMiddleware, authControllers.signin);

export default authRouter;
