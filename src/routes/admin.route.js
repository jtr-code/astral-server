import { Router } from 'express'
import { createSite } from '../controllers/admin.controller.js'

const router = Router()

router.post("/site", createSite)

export default router