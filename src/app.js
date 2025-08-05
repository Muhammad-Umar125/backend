import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials : true
}))

// accepting json
app.use(express.json({limit:"16kb"}))
// url ko decode kerna
app.use(express.urlencoded({extended:true,limit:"16kb"}))
// hamare public folder sa read kerna
app.use(express.static("public"))
// cookie set kerna or read kerna
app.use(cookieParser())

//routes import 
import router from "./routes/user.routes.js"

// routes declaration
app.use("/api/v1/users",router)


export {app}