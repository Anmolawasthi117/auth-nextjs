import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
}