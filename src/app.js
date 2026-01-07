import express from "express";
import cors from "cors"

import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))   

app.use(express.json({limit: "16kb"}))//json mai data lena
app.use(express.urlencoded({extended: true,limit:"16kb"})) // form  data lena
app.use(express.static("public"))// static files k directly load karne ke liye
app.use(cookieParser())// cookies handle karne ke liye
export {app}