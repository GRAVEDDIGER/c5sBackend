import mongoose,{Schema} from "mongoose"

export const Ads= new Schema({
    url:{type:String,required:true},
    expires:{type:Date,required:true},
    ownerId:{type:String,required:true},
    price:{type:Number,required:true}
})
export const User=new Schema({
    userId:{type:String},
    inTimeStamp:{type:Date,required:true},
    outTimeStamp:{type:Date,required:true},
    activeTimeInSeconds:{type:Number,required:true}
})
const PostSchema = new Schema({
    title:{type:String},
    post:{type:String},
    photos:[String],
    isVisible:{Boolean},
    isPriority:{Boolean},
    category:{type:String},
    scope:{type:String},
    users:[User],
    adBanner1:Ads,
    adBanner2:Ads,
    adBanner3:Ads,
    loaderAdv:Ads
},{timestamps:true})

export const PostModel = mongoose.model("postCollection", PostSchema)