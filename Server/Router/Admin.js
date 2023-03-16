const router = require("express").Router()
const AdminController = require("../Controller/AdminController")


router.post("/login",AdminController.login)

router.post("/createUser",AdminController.createUser)

module.exports = router