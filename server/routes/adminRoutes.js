const express=require("express")
const router=express.Router()
const Admin=require("../model/admin")


router.post("/add-admin",async (req,res)=>{
    try{
        const {email,password}=req.body
        const admin=await new Admin({email:email,password:password})
        await admin.save()
        res.status(201).json({admin,message:"Logged Successfully"})
    }catch(err){
        res.status(500).json({message:"Couldn't log in"});
        
    } 
})

module.exports=router

