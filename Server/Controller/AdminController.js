const UserSchema =  require("../Model/UserSchema")
const jwt = require("jsonwebtoken")
require('dotenv').config()

const Admincredentials = {
    email : "admin@gmail.com",
    password : 1234
}

module.exports={

    login:(req,res)=>{
        console.log(req.body)
        if(req.body.email == Admincredentials.email && req.body.password == Admincredentials.password){
            const token = jwt.sign(req.body, process.env.AccessTokensecretKey);
            console.log(token)
        }else{
            res.send("failed")
        }
    },

    createUser:async(req,res)=>{
    
        if(!req.body.email || !req.body.password  || !req.body.name || ! req.body.roles){
            res.send("failed")
        }else{

            //user find (already exist or not )

           const newUser = await new UserSchema(req.body);
          
           newUser.save();
          
        }
    }

} 