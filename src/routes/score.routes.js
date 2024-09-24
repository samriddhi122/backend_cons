import { Router } from "express"
import { addScore, getLeaderboard,getScore,updateScore } from '../controllers/score.controller.js';
const router = Router()
router.route("/").post(addScore)
router.route("/").get(getLeaderboard)
router.route("/points").get(getScore)
router.route("/points").post(updateScore)
export default router