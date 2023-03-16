const UserSchema =  require("../Model/UserSchema")
const TicketSchema = require("../Model/TicketSchema")

module.exports={
    findTicket: (req, res) => {
        let filterQuery
        
            UserSchema.findById(req.body.AgentId)
                .then((user) => {
                    if (!user) {
                        filterQuery={}
                    } else {
                            filterQuery = { AgentId: user._id } 
                           TicketSchema.find(filterQuery)
                            .then((tickets) => {
                                res.send(tickets)
                            })
                            .catch((error) => {
                                console.error(error)
                               
                            })
                    }
                })
                .catch((error) => {
                    console.error(error)
                    
                })
        
    }
    
}