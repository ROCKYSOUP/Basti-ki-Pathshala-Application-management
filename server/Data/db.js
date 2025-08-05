const dotenv=require("dotenv")
const mongoose=require("mongoose")

dotenv.config()

const connectdb=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DataBase Connected")
    }catch(err){
        console.log(err.message,"DataBase did not connect")
    }
}

module.exports=connectdb