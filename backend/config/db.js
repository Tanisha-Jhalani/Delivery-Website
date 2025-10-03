

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      // 'mongodb+srv://tanishajhalan:123456SS@cluster0.fdtfw4s.mongodb.net/Delivery-Website'

     'mongodb+srv://tanishajhalan:123456SS@cluster0.fdtfw4s.mongodb.net/Delivery-Website?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};

 