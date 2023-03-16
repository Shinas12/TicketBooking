const router = require("express").Router()

router.route("/")
.get((req,res)=>{
    console.log("supervisor")
})

module.exports = router 