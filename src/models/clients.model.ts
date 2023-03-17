import mongoose,{Schema} from "mongoose"
import {Ads} from "./post.model"
export const ClientSchema= new Schema({
    userId:{type:String, required:true},
    phone:{type:String, required:true},
    dni:{type:Number, required:true},
    street:{type:String, required:true},
    adressNumber:{type:Number, required:true},
    state:{type:String, required:true},
    city:{type:String, required:true},
    department:{type:String, required:true},
    zipCode:{type:String, required:true},
    pubs:[Ads]
})

export const ClientModel = mongoose.model("ClientCollection",ClientSchema) 