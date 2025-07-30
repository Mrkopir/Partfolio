import express, { json } from "express"
import cors from "cors"
import dotenv from "dotenv";
import path from "path"

import GetData from "./routers/GetData.js"

dotenv.config();

const app = express()
app.use(cors())
app.use(json())

app.use("/api/sendData", GetData)

app.use("/api/img", express.static(path.join("public/img")))


app.listen(process.env.PORT || 5000, () => {
    console.log("Server Runing")
})