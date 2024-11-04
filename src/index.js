import dotnev from "dotenv";

import { app } from "./app.js";
import { connectDb } from "./db/dbConfig.js";
import logger from "./logger/winston.logger.js";

dotnev.config({
    path: "./.env",
});

connectDb()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            logger.info("⚙️  Server is running on port: " + process.env.PORT);
        });
    })
    .catch((err) => {
        logger.error("Mongo db connection error: ", err);
    });
  