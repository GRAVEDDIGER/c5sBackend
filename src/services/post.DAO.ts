import { DataResponse,ErrorMessage } from "../helper/utility.classes";
import {PostModel} from "../models/post.model"
import logger from "../helper/LoggerConfig"
export class PostDAO implements IPostsDAO {
    constructor(
        model:Model<any>= PostModel,
        protected errorHanlder=(error:unknown):IError=>{
            let newError:IError ={
                code:0,
                title:"",
                message:"",
                data: (typeof error ==="object") ? JSON.stringify(error): (typeof error ==="string") ? error :null
            }
                const isCode =():boolean=>(typeof error ==="object"&& error !== null && "code" in error && typeof error.code==="number")
                if (typeof error === "object" && error !==null)
                { 
                if ("code" in error && typeof error.code === "number") newError["code"]= error.code
                if ("toString" in error) newError["data"]=error.toString() as string
                if ("name"in error) {
                    if (error.name ==="CastError") 
                    {
                        newError.title="Wrong ID"
                        newError.message="Id provided doesnt exist or doesnt validate the objectId Structure"
                    }else 
                    { 
                        if (isCode() && "code" in error){  

                            if (error.name ==="MongoError" && error.code === 11000) 
                                {
                                    newError.title="Key is duplicated Mongo Error"
                                    newError.message="A unique key is being used in a duplicated value look in error.data for more accurate info"
                                }
                    
                        }else{
                            newError.title="Unlisted error verify error.data for more information"
                            newError.message="Unespected exception"
                        }
                    }
            }           
            }return newError
        },
       public getAllPosts=async ():Promise<any[]|unknown>=>{
            try{
            const response = await model.find({})
            logger.debug.debug({level:"debug",message:"getAllPosts",response})
            return new DataResponse(true,200,"Query Succeded",null,response)
        }catch(error){
            logger.error.error({level:"error",message:"getAllPosts",error})
        } 
        },
        public getPostById =async  (id:string,user:any):Promise<any|unknown> =>{
           

            try{
                const response = await model.findOneAndUpdate({_id:id},user)
                logger.debug.debug({level: "error",message:"findById",response})
                return new DataResponse(true,200,"Query Succeded",null,response)
            }catch
            (error)
            {   const newError =errorHanlder(error)
                logger.error.error({level: "error",message:"findById",error:newError})
                return new DataResponse(false,400,"Query failed",newError,null)
        }
    }
    ){

    }
}