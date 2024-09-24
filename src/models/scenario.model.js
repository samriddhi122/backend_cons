import mongoose, {Schema} from "mongoose";
const scenarioSchema = new Schema(
    {
        
        name: {
            type:String,
        } ,
        background: {
            type:String,
            required:true,
        },
        statement:{
            type:String,
            required:true,
        },
        option1:{
            type:String,
            required:true,
        },
        consequence1:{
            type:String,
            required:true
        },
        option2:{
            type:String,
            required:true,
        },
        consequence2:{
            type:String,
            required:true
        }

    },
    {
        timestamps: true
    }
)
export const Scenario = mongoose.model("Scenario", scenarioSchema)