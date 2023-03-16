const UserSchema = require("../Model/UserSchema")

const Checking = (req,res,next)=>{
    console.log("its checking")
    console.log(req.body)

    if(!req.body.AgentId) {
        res.send("failed")
     }else{

        UserSchema.findById(req.body.AgentId).then((user)=>{
            console.log(user)
            if(!user){
                res.send("no user with this id")
            }else{
                if(user.roles != "agent"){
                    res.send("accessdenied")
                }else{
                   next();
                }
            }
        })
     }

}

module.exports = Checking