import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectToDb } from "./db/db.js";
import userRoutes from "./routes/user.route.js";
dotenv.config();

const app = express();

connectToDb();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello From backend");
});

export default app;
