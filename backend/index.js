const express=require("express")
const app=express()
const {connection}=require("./db")
const {userRouter}=require("./routes/Auth")
const {Router}=require("./routes/dashboard")
const cors=require("cors")
app.use(express.json())
app.use(cors())
app.use("/user",userRouter)
app.use("/employee",Router)
app.listen(8080,async()=>{
    try{
        await connection
        console.log("connected to db")
        console.log(`connected to port 8080`)
    }catch(err){
        console.log(err)
        console.log("connection failed")
    }
    
})