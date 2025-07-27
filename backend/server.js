import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
const app = express();
const port = 4000;

// Connect to MongoDB
connectDB();

// ✅ Middlewares BEFORE routes
app.use(express.json());  // Allows parsing of JSON in request bodies
app.use(cors());          // Allows cross-origin requests
app.use("/images", express.static("uploads"));  // Serves image files

// ✅ API routes after middleware
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart" , cartRouter);
// Test route
app.get("/", (req, res) => {
  res.send("API is working ✅");
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server started on http://localhost:${port}`);
});
