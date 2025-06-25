
const jwt = require('jsonwebtoken');

const authuser = (req, res, next) => { 

    const { token } = req.headers;

    try {
        
        if(!token){
        return res.status(401).json({
            success:false,
            message:"Token is required"
        })
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
  

        next();

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:error,
            success: false,
            message: "user authentication error"
        })
    }
    



}

module.exports = authuser;
