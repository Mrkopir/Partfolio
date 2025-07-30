import express, { json } from "express"
import cors from "cors"
import dotenv from "dotenv";
import path from "path"

import GetData from "./routers/GetData.js"

dotenv.config();

const app = express()
const allowedOrigins = [
  "https://your-vercel-domain.vercel.app",
  "https://your-render-domain.onrender.com",
  "http://localhost:3000"
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.use(json())

app.use("/api/sendData", GetData)

app.use("/api/img", express.static(path.join("public/img")))


app.listen(process.env.PORT || 5000, () => {
    console.log("Server Runing")
})