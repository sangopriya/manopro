const mongoose = require ('mongoose');
const BioData  = require ('../Models/biodataModel');

const createData = {
    store : async (req,res)=>{
        try {
            const name = req.body.name
            const age = req.body.age
            const standard = req.body.standard

            const allDetails = await BioData({
                name,
                age,
                standard
            })
            await allDetails.save();
            res.json({msg:"Values Inserted"})
        } catch (error) {
            res.json({msg:"Something error in your server"})
         }
    }
}

//readData
const readData = {
    read : async (req,res)=>{
        try {
            const readData = await BioData.find();
            res.json({msg:"Values Reader",readData})
            
        } catch (error) {
            res.json({msg:"Something error in your server"})
         }
    }
}

//update Data
const updateData = {
    update : async (req,res) =>{
        try {
            const {id} = req.params;
            const{name,age,standard} = req.body
            const updateData = await BioData.findByIdAndUpdate(id,{name,age,standard}, {new:true})
            res.json({msg:"Data Updated",updateData})
        } catch (error) {
            res.json({msg:"Something error in your server"})            
        }
    }
}

//delete Data
const deleteData = {
    delete : async (req,res) =>{
        try {
            const {id} = req.params;
            const deleteData = await BioData.findByIdAndRemove(id).exec()
            res.json({msg:"Data Deleted",deleteData})
        } catch (error) {
            res.json({msg:"Something error in your server"})            
        }
    }
}

module.exports = {createData,readData,updateData,deleteData}