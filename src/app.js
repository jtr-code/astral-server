import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morganMiddleware from "./logger/morgan.logger.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: "true", limit: "16kb" }));
app.use(cookieParser());

app.use(morganMiddleware)

// api routes
import siteRouter from "./routes/site.route.js";

app.use("/api/v1/sites", siteRouter);

app.use(errorHandler);

export { app };
