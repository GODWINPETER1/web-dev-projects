import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import  contactRoutes  from "./routes/contactRoutes.js"; // Add .js extension

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

