const express = require("express")
const app = express()
const admin = require("./Router/Admin")
const agent = require("./Router/agent")
const supervisor = require("./Router/supervisor")
const mongoose = require("mongoose")
const cors = require("cors")

mongoose.connect('mongodb://localhost:27017/Ticket'
).then(()=>{
    console.log("database connected")
}).catch((err)=>{
    console.log(err)
})

app.use(cors())
app.use(express.json())
app.use("/admin",admin)
app.use("/agent",agent)
app.use("/supervisor",supervisor)

app.listen(3000,()=>{
    console.log("server started")
})