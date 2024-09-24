import { Router } from "express"
import { postArticle,getArticle } from "../controllers/article.controller.js"
const router=Router()
router.route("/").post(postArticle)
router.route("/").get(getArticle)
export default router