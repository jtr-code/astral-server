import { Router } from 'express'
import { createSite, deleteSite, updateSite } from '../controllers/admin.controller.js'

const router = Router()

router.post("/site", createSite)
router.put("/site/:siteId", updateSite)
router.delete("/site/:siteId", deleteSite)

export default router