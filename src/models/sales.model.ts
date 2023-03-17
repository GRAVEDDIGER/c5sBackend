import mongoose,{Schema} from "mongoose"
import {ClientSchema} from "./clients.model"
import { Ads } from "./post.model"
const SalesSchema = new Schema({
pubs:[Ads],
totalPrice:{type:Number},
client:{type:ClientSchema}

})
