import  { Router } from "express";
import { getScenario } from "../controllers/scenario.controller.js";
const router=Router()
router.route("/").get(getScenario)
export default router
