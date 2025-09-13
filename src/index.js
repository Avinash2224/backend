import connectDB  from "./db/index.js";
import dotenv from "dotenv";

 
dotenv.config({
  path: "./.env",
});
connectDB()

.then(() => { 
  app.listen(process.env.PORT, () => {
    console.log(process.env.PORT || 8080, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  });
})


.catch((error) => {
  console.error("Database connection error:", error);
});

 