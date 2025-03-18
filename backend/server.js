import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("Express error: ", error);
            throw error;
        });
        app.listen(process.env.PORT || 5000, () => {
            console.log(
                `Server is running on port ${process.env.PORT || 5000}`
            );
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed: ", err);
    });