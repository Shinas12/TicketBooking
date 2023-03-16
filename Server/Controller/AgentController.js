const UserSchema = require("../Model/UserSchema")
const TickeSchema = require("../Model/TicketSchema")
const jwt = require("jsonwebtoken")
require('dotenv').config()


module.exports={

    login : async(req,res)=>{
        if(!req.body.email || !req.body.password){
            res.send("failed")
        }else{
              UserSchema.find({email:req.body.email}).then((user)=>{
                if(!user){
                    res.send("failed")
                }else{
                   
                    const data = user[0]._doc
                  
                    
                    const token = jwt.sign(data, process.env.AccessTokensecretKey)
                    res.send(token)
                }
              })
        }
    },

  
    createTicket : async (req,res)=>{

        if(!req.body.title || !req.body.body){
            res.send("not valid")
        }else{
            const newTicket =await new TickeSchema(req.body)
            newTicket.save()

        }
    }
    
}