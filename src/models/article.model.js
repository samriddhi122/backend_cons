import mongoose, {Schema} from "mongoose";
const articleSchema= new Schema(
    {
        chapter: {
            type:String,
            required:true,
        },
        articleNumber:{
            type:String,
        },
        originalText:{
            type:String,
        },
        simplifiedText:{
            type:String,
        },
        mediaAttachment:{
            type:String,
        },
        language:{
            type:String,
        }


    },{
        timestamp:true
    }
);
export const article=mongoose.model("Article",articleSchema)
