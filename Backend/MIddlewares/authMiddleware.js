const jwt = require('jsonwebtoken')
const User = require('../Models/User')

const protect = async (req, res, next) => {
    let token;
    if(
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            
            token = req.headers.authorization.split(" ")[1]

            const decode = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decode.id).select("-password")

            next()

        } catch (err) {
           return res.status(401).json({Message : "Not Authorized, token Failed"})
        }
    }
    if(!token) {
        return res.status(401).json({Message : "Not Authorized  no token"})
    }
}

module.exports = protect