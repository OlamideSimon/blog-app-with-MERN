import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import errorHandler from './middlewares/ErrorMiddleware'
import blogRoute from './routes/blogRoutes'
import userRoute from './routes/userRoutes'
import commentRoute from './routes/commentRoutes'
import connectDb from "./config/db";
import cors from 'cors'

dotenv.config();
connectDb()

const app: Express = express();
const port: string | undefined = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/blogs', blogRoute)
app.use('/api/users', userRoute)
app.use('/api/comments', commentRoute)

app.use(errorHandler)

app.listen(port, () => console.log(`Listening at port: ${port}`))