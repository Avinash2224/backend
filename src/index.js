import connectDB  from "./db/index.js";
import dotenv from "dotenv";

 
dotenv.config({
  path: "./.env",
});
connectDB();
 



// import express from "express";

// (async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       dbName: backendDB,
//     });
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     throw error;
//   }
// })();

 