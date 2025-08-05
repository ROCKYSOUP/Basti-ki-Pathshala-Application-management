const express=require("express")
const connectdb=require("./Data/db")
const adminRoute=require("./routes/adminRoutes")
const requestRoute=require("./routes/requestRoutes")
const dotenv=require("dotenv")

dotenv.config()

const cors=require("cors")

const app=new express()

app.use("/uploads", express.static("uploads"));


app.use(express.json())
app.use(cors())
app.use("/admin",adminRoute)
app.use("/request",requestRoute)

connectdb()


app.listen(process.env.PORT || 5000,()=>{
    console.log("Server connected")
})
