import { Router } from "express"
import { addScore, getLeaderboard } from '../controllers/score.controller.js';
const router = Router()
router.route("/").post(addScore)
router.route("/").get(getLeaderboard)
export default router