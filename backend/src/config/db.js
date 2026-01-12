import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    
    if (!uri) {
      throw new Error("MONGO_URI is not defined in .env file");
    }
    
    console.log("Connecting to MongoDB Atlas...");
    console.log("URI starts with:", uri.substring(0, 25) + "...");
    
    await mongoose.connect(uri);
    console.log("✅ MONGODB ATLAS CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.error("❌ Error connecting to MONGODB:", error.message);
    process.exit(1); // exit with failure
  }
};
