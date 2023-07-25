const jwt = require("jsonwebtoken")

// secret key
const SECRET_KEY = "0be43392-0d5d-436f-8d48-7d4476f923c1"

const authMiddleware = async (req, res, next) => {
    const token = req?.headers?.authorization?.split(" ")[1]
    if(!token) return res.status(StatusCodes.UNAUTHORIZED).json({message: "You need to be authenticated to complete this operation"})
    try {
        const validToken = await jwt.verify(token, SECRET_KEY);
        if(!validToken) return res.json({message: "Invalid token"}).status(StatusCodes.UNAUTHORIZED)
        // console.log({validToken});
        req.user = validToken;
        // console.log(req.user);
        next();
    } catch (error) {
        console.log({AuthERror: error.message});
        res.json({message: error}).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {authMiddleware}