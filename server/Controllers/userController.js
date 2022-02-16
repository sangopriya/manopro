const mongoose = require ('mongoose')
const Users = require ('../Models/userModel')
const bcrpyt = require ('bcrypt')
const jwt  = require('jsonwebtoken')

const userAuthentication = {
    register : async(req,res)=>{
        try {
            const {username,email,password} = req.body

            //email condition check it out
            const user = await Users.findOne({email})
            if(user) return res.json({msg:"User Already Exists"})

            //password character condition 
            if(password.length < 8) return res.json({msg: "Password must be 8 characters"})

            //all field require condition
            if(!username || !email || !password){
                return res.json({msg:"Please Fill The Fields"})
            }

            //password encrypted
            const hashPassword = await bcrpyt.hash(password,10)

            //save to db
            const allData = new Users({username,email,password:hashPassword})
            await allData.save()
            return res.json({msg : " Register Successfully "})

        } catch (error) {
            // return res.json({msg : " Failed To Register "})
            console.log(error)

        }       
    },

    login : async (req,res) => {
       try {
            const {email,password} = req.body;
                
            const user = await Users.findOne({email})
            if(!email) return res.json({msg : "User Does not exists"})
    
            if(!email || !password){
                res.json({msg : "Please fill all the fields"})
            }
            const isMatch = await bcrpyt.compareSync(password,user.password)
            if(!isMatch){
                return res.json({msg: "password is incorrect"})
            }
    
            //creating access token
            if(isMatch){

                const accessToken = createAccessToken({_id: user.id})
               // console.log(accessToken)
                const {_id,username,email} = user
                return res.json({accessToken,savedUser:{_id,username,email}})
            }
       } catch (error) {
           console.log(error)
       }  
    
    }

}
const createAccessToken = (user)=>{
    return jwt.sign(user,process.env.TOKEN_KEY,{expiresIn:'1d'})
}



module.exports = {userAuthentication}