import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: "true", limit: "16kb" }));
app.use(cookieParser());

// routes import
// import siteRouter from "./routes/site.routes.js";

// app.use("/api/v1/site", siteRouter);

export { app };
