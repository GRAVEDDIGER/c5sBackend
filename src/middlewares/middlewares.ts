import express from "express"
import { morganWinston } from "../helper/CustomMorgan"
import morgan from "morgan"
import flash from "connect-flash"
import Session from "express-session"
import Store from "connect-mongo"
import dotenv from "dotenv"
import passport from 'passport'
import passportConfig from "passport-fast-config"
import { mongoConnect } from "../helper/mongoConnection"
import logger from '../helper/LoggerConfig';
// VARIABLES
dotenv.config()
mongoConnect(process.env.MONGOURL as string)
    .then(()=>{         
const app=express()
// SESSION
const store =  Store.create({mongoUrl:process.env.MONGOURL})
const sessionMiddleware= Session({
store:store,
secret:process.env.SESSIONPASS as string,
// cookie:{maxAge:1000*60*60*24*10},
resave:false,
saveUninitialized:false
})
//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(sessionMiddleware)
app.use(flash())
app.use(morgan(morganWinston))
//AUTHENTICATION
})
    .catch(
        (error)=>logger.error.error({level:"error",message:"Error connecting mongoose",error})
    )