import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/startup.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Routes
app.use("/api/startups", router);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
