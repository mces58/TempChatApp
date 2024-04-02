import { Router } from 'express'
import { getUsersForSidebar } from '../controllers/user.controller.js'
import { protectRoute } from '../middlewares/protectRoute.middleware.js'

const router = Router()

router.get('/', protectRoute, getUsersForSidebar)

export default router
