import express from "express";
import { connection } from "./src/db.js";
import cors from "cors";
import { router } from "./src/route.js";
import cookieParser from "cookie-parser";

export const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(router);

connection();

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000");
});
