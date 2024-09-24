import { Scenario } from "../models/scenario.model.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {ApiError} from "../utils/ApiError.js"
import { isValidObjectId } from "mongoose"

const getScenario= asyncHandler( async (req,res)=>{
    const {scenarioId}=req.body;
   if(!scenarioId){
    throw new ApiError(400,"scenarioId is required");
   }
   if(!isValidObjectId(scenarioId)){
    throw new ApiError(400,"scenarioId is invalid");
   }
   const scenario = await Scenario.findById(scenarioId);
    if(!scenario){
        throw new ApiError(404,"scenario not found");
    }
    res.status(200).json(
        new ApiResponse(200,scenario,"scenarios fetched succesfully") 
    )
    
})
export{
    getScenario
}