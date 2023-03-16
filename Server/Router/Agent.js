const router = require("express").Router()
const verifyToken = require("../Middleware/verifyToken")
const Checking = require("../Middleware/AgentChecking")
const AgentController = require("../Controller/AgentController")
const TicketController = require("../Controller/TicketController")

router.post("/login",AgentController.login)

router.post("/createTicket",verifyToken,Checking,AgentController.createTicket)

router.get("/ListTicket",verifyToken,TicketController.findTicket)


module.exports = router