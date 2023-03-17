import mongoose from 'mongoose';
import logger from './LoggerConfig';
export async function mongoConnect (url:string):Promise<void>{
    mongoose.set("strictQuery",false)
    await  mongoose.connect(url)
        .then(()=>logger.info.info({level:"info",message:"Mongo DB connected successfully"}))
        .catch(error=>{logger.error.error({level:"error",message:"Error connecting",error})})
}
