import express from "express";
import dotenv, { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
// import partnerRouter from "./routes/partnerRouter.js";
// import adminRouter from "./routes/adminRouter.js";
import { errorHandler, notFound } from "./middleWare/errorMiddleware.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
connectDB();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use("/", userRouter);
// app.use("/partner", partnerRouter);
// app.use("/admin", adminRouter);

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`server started at ${port}`);
});
