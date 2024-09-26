import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const startupsRouter = require("./routes/startups");
app.use("/api/startups", startupsRouter);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(5000, () =>
      console.log("Server running on http://localhost:5000")
    )
  )
  .catch((err) => console.error(err));
