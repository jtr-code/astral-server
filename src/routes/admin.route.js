import { Router } from 'express'
import { createSite, updateSite } from '../controllers/admin.controller.js'

const router = Router()

router.post("/site", createSite)
router.post("/site/:siteId", updateSite)

export default router