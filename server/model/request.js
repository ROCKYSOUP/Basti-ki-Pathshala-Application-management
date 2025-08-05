const mongoose=require("mongoose")

const requestSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    skills:{
        type:[String],
    },
    resumeUrl:{
        type: String,
        required: true
    },
    requestStatus:{
        type: String,
        enum:["Pending","Approved","In-touch"],
        default:"Pending",
    }
})

const Request=mongoose.model("Request",requestSchema)

module.exports=Request