import { Language } from "../models/language.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { isValidObjectId } from "mongoose";

const getLanguageData = asyncHandler(async (req, res) => {
  const { langId } = req.body;
  
  if (!langId) {
    throw new ApiError(400, "langId is required");
  }
  
  if (!isValidObjectId(langId)) {
    throw new ApiError(400, "langId is invalid");
  }
  
  const language = await Language.findById(langId);
  
  if (!language) {
    throw new ApiError(404, "Language not found");
  }
  
  res.status(200).json(
    new ApiResponse(200, language, "Language data fetched successfully")
  );
});

export {
  getLanguageData
};


// const languageData = {
//     en: { title: 'Welcome', content: 'This is the English content.' },
//     hi: { title: 'स्वागत है', content: 'यह हिंदी सामग्री है।' },
//   };
  
  