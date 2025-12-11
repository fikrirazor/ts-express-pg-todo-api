import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Create Express app
const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req: Request, res: Response): void => {
  res.send("Hello, TypeScript + Express!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
