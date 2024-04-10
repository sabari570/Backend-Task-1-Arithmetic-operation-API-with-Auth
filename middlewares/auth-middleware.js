const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET_KEY = process.env.JWT_ACCESS_TOKEN_SECRET_KEY;

// middleware for protecting the routes
module.exports.requireAuth = (req, res, next) => {
  let headerToken = req.headers.authorization;

  // verifying token using jwt
  if (headerToken) {
    headerToken = headerToken.split(" ")[1];
    jwt.verify( headerToken, JWT_SECRET_KEY, 
    (err, decodedToken) => {
      if(err) return res.status(403).json({ error: "Token is not valid" });
      req.user = decodedToken.username;
      next();
    }
    );
  }else{
    res.status(401).json({ error: "You are not authenticated" });
  }
};
