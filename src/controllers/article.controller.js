import {article} from "../models/article.model.js";
import {ApiError} from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
const postArticle= asyncHandler( async (req,res)=>{
    const {chapter, articleNumber, originalText, simplifiedText, language}=req.body;
    const createdArticle=await article.create({
        chapter,
        articleNumber,
        originalText,
        simplifiedText,
        language
    })
    res.status(200).json(
        createdArticle
    )
})
const getArticle=asyncHandler(async(req,res)=>{
    const {articleId}=req.body;
    if(!articleId){
        throw new ApiError(400,"articleId is required",error);
    }
    const Article2=await article.findById(articleId);
    if(!Article2){
        throw new ApiError(404,"article not found",error);
    }
    res.status(200).json(
        Article2  
    )
})
export {
    postArticle,getArticle
}
