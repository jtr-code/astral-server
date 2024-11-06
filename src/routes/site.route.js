import { Router } from "express";
import { getAllSites, getSiteById } from "../controllers/site.controller.js";

const router = Router()

router.get("/", getAllSites)
router.get("/:siteId", getSiteById)

export default router;

