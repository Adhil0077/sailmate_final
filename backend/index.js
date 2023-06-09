import express from 'express'
import dotenv, { config } from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connectDB from './config/db.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 5000
connectDB()

app.use(cors({
  origin:['http://localhost:3000'],
  methods:['GET','POST','PUT','DELETE'],
  credentials:true
}))

app.listen(port,()=>{
  console.log(`server started at ${port}`)
})

