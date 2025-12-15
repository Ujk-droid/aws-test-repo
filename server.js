require("dotenv/config")
const express = require("express")
const userRoute = require("./routes/user.routes")
const {connectMongoDb} = require("./db/connection")
 
const app = express()
const PORT = process.env.PORT || 3000

// -------------------------- MongoDB connection
connectMongoDb(process.env.MONGODB_URL)

// --------------------------  Middleware
app.use(express.json())

// --------------------------  Health Check
app.get("/", (req, res)=>{
    res.status(200).send("health check passed: Server is active")
})

// --------------------------  Routes
app.use("/user", userRoute)

app.listen(PORT, ()=>{console.log(`Server is up and running on port ${PORT}`)})

// console.log("Mongo URL:", process.env.MONGODB_URL)
