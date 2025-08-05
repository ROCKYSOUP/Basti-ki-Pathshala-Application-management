const express=require("express")
const router=express.Router()
const Request=require("../model/request")
const upload=require("../middleware/upload")

router.post("/add", upload.single("file"), async (req, res) => {
  try {
    const resumeUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    const { firstName, lastName, email, skills } = req.body;

    const request = new Request({
      firstName,
      lastName,
      email,
      skills: Array.isArray(skills) ? skills : [skills], 
      resumeUrl,
    });

    await request.save();
    res.status(200).json({ request, msg: "Request added successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});


router.get("/pending",async (req,res)=>{
    try{
        const requ=await Request.find({requestStatus:"Pending"})
        res.status(200).json(requ)
    }catch(err){
        res.status(400).json(err.message)
    }
})

router.get("/approved",async (req,res)=>{
    try{
        const requ=await Request.find({requestStatus:"Approved"})
        res.status(200).json(requ)
    }catch(err){
        res.status(400).json(err.message)
    }
})

router.get("/in-touch",async (req,res)=>{
    try{
        const requ= await Request.find({requestStatus:"In-touch"})
        res.status(200).json(requ)
    }catch(err){
        res.status(400).json(err.message)
    }
})

router.delete("/delete/:id",async (req,res)=>{
    try{
        const {id}=req.params
        const requ= await Request.findByIdAndDelete(id)
        res.status(200).json({requ,msg:"Request deleted successfully"})
    }catch(err){
        res.status(400).json(err.message)
    }
})


router.put("/edit/:id",async (req,res)=>{
    try{
        const {id}=req.params
        const {status}=req.body
        const requ= await Request.findByIdAndUpdate(id,{requestStatus:status},{new:true})
        res.status(200).json({requ,msg:"Request updated successfully"})
    }catch(err){
        res.status(400).json(err.message)
    }
})

module.exports=router