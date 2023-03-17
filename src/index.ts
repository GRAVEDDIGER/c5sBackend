import express from "express"
import dotenv from "dotenv"
import logger from "./helper/LoggerConfig"
dotenv.config()
const app=express()
const PORT =process.env.PORT || 8080
app.listen(PORT,()=>logger.info.info({level:"info",message:`Listening on port ${PORT}`}))