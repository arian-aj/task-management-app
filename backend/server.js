import express from "express";
import connect from "./config/db.js";
import taskRouter from "./routes/tasks.js"
import mongoose from "mongoose";
import cors from "cors";
await connect();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json())
app.use(cors())

app.use("/api/tasks", taskRouter)

app.use((err, req, res, next) => {
    // Custom error handling for different types of errors
    if (err instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ "error": "Validation error", details: err.message });
    }
    res.status(500).json({ error: err.message })
  })

app.listen(port, () => {console.log("Server started on port http://localhost:", port)})