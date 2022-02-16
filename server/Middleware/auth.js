const Users = require ('../Models/userModel')
const jwt = require('jsonwebtoken')
 module.exports = (req,res,next) =>{
     const {authorization} = req.headers
     if(!authorization){
         return res.json({msg : "You must logged in"})
     }
     const accessToken = authorization.replace("Bearer ","")
     jwt.verify(accessToken,process.env.TOKEN_KEY,(err,payload)=>{
         if(err){
             return res.json({err:"you must logged in"})
         }
         const {_id} = payload
         Users.findOne({_id}).then(allData =>{
             req.user = allData
             next()
         })
     })
 }