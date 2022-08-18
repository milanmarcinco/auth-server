import dotenv from "dotenv";
dotenv.config();

import express from "express";

import authRouter from "./features/auth/auth.router";

import globalRequestErrorHandler from "./lib/globalRequestErrorHandler";

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.use(globalRequestErrorHandler);

const port = process.env.port || 4000;
app.listen(port, () => {
  console.log(`Server listening on port *:${port}...`);
});
