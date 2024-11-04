import { Router } from "express";
import { getAllSites } from "../controllers/site.controller.js";

const router = Router()

router.get("/", getAllSites)

export default router;

