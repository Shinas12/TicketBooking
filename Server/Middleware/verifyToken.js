require('dotenv').config()
const  jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
  
    if (!token) {
      return res.status(403).send({
        message: "No token provided!"
      });
    }
  
    jwt.verify(token, process.env.AccessTokensecretKey, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!"
        });
      }
      req.body.AgentId = decoded._id;
      next();
   });
  };

  module.exports = verifyToken