const jwt = require('jsonwebtoken');

const JWT_SECRET = "mySuperSecretKey";

exports.authMiddleware = async (req,res,next) => {
    const authHeader = req.header("Authorization")//client le sent gareko authorization token

    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1];//split this in the strint formwith the ["bearer","<token>""]

    try {
        const decode = jwt.verify(token,JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
}