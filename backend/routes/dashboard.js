const express=require("express")
const Router=express.Router()
const {EmployeeModel}=require("../models/employee")
const {auth}=require("../middleware/auth.middleware")
Router.use(auth)
Router.post("/",async(req,res)=>{
    const {firstName,lastName,email,department,salary}=req.body
    try{
        const employee=new EmployeeModel({firstName,lastName,email,department,salary})
        await employee.save()
    res.status(200).json({msg:"employee added",employee:req.body})
    }catch(err){
        res.status(400).send({error:err.message})
    }
})

Router.get("/get",auth,async(req,res)=>{
    try{
        const {search,department,page,sort}=req.query
        const limit=5
        const skip=(page-1)*limit
        const totalEmployees=await EmployeeModel.countDocuments()
        const totalPage=Math.ceil(totalEmployees/limit)
        let sortDirection=1
        if(sort=="asc"){
            sortDirection=1
        }else{
            sortDirection=-1
            
        }
        const query={}
        if(search){
            query.firstName=search
        }
        if(department){
            query.department=department
        }
        const employees=await EmployeeModel.find(query).sort({salary:sortDirection}).skip(skip).limit(limit)
        res.status(200).json({employees,totalPage})
        
    }catch(err){
        res.status(400).send({error:err.message})
    }
})

Router.patch("/:id",auth,async(req,res)=>{
     const {id}=req.params
     const {firstName,lastName,email,department,salary}=req.body
    try{
        const employee=await EmployeeModel.findByIdAndUpdate(id,{firstName,lastName,email,department,salary},{new:true})
        res.status(200).json({employee})
    }catch(err){
        res.status(400).send({error:err.message})
    }
})

Router.delete("/:id",auth,async(req,res)=>{
    const {id}=req.params
    try{
        const employee=await EmployeeModel.findByIdAndDelete(id)
        res.status(200).json({employee})
    }catch(err){
        res.status(400).send({error:err.message})
    }
})



module.exports={Router}





// "email": "a@gmail.com",
//     "pass": "asdfgh",
//     "confirmpass    ": "asdfg"