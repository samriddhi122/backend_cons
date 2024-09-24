import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
//import routes
import articleRouter from './routes/article.routes.js'
import scenarioRouter from './routes/scenario.route.js'
import scoreRouter from './routes/score.routes.js'
//routes declaration
app.use("/api/v1/article",articleRouter)
app.use("/api/v1/scenario",scenarioRouter)
app.use("/api/v1/score", scoreRouter)

export { app }