import mongoose from "mongoose";
import logger from "../logger/winston.logger.js";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.DATABASE_URL);
        logger.info(
            `\n☘️  MongoDB Connected! Db host: ${connectionInstance.connection.host}\n`
          );
    } catch (error) {
        logger.error("MongoDB connection error: ", error);
        process.exit(1);
    }
};

export { connectDb };
