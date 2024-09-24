import { Router } from "express";
import { getLanguageData } from "../controllers/language.controller";

const router = Router();

router.route("/").get(getLanguageData);

export default router;
