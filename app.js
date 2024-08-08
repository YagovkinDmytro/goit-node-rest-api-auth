import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";

import sequelize from "./db/sequelize.js";

import authRouter from "./routes/authRouter.js";
import contactsRouter from "./routes/contactsRouter.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/app/auth", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

const { PORT = 3000 } = process.env;
const port = Number(PORT);
try {
  await sequelize.authenticate();
  console.log("Database connection successful.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
  process.exit(1);
}

app.listen(port, () => {
  console.log(`Server is running. Use our API on port: ${port}`);
});
