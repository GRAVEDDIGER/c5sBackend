import mongoose,{Schema} from "mongoose"
export const UserSchema=new Schema({
    bitrhDate:{type:Date},
    name:{type:String},
    lastName:{type:String},
    rol:{type:String}
})

export const UserModel=mongoose.model("userModel",UserSchema)