require("dotenv").config();
const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_SECRET_KEY = process.env.JWT_ACCESS_TOKEN_SECRET_KEY;
const REFRESH_TOKEN_SECRET_KEY = process.env.JWT_REFRESH_TOKEN_SECRET_KEY;

// array that stores the valid refresh token
let refreshTokens = [];

// Function to create token
const createToken = (username) => {
  // creating access token that expires after every 15m
  const accessToken = jwt.sign({ username }, ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: "15m",
  });

  // creating refresh token that expires each day
  const refreshToken = jwt.sign({ username }, REFRESH_TOKEN_SECRET_KEY, {
    expiresIn: "1d",
  });
  return { accessToken, refreshToken };
};

// Controller for authenticating the user
module.exports.authenticate = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (username && password) {
      if (username === "admin" && password === "123") {
        const { accessToken, refreshToken } = createToken(username);

        // placing the refresh token inside the array
        refreshTokens.push(refreshToken);

        return res.status(200).json({
          username: username,
          "access-token": accessToken,
          "refresh-token": refreshToken,
        });
      } else {
        throw new Error("Invalid credentials");
      }
    }else{
      throw new Error("Username/password fields cannot be empty")
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// controller for regenerating access token using refresh token
module.exports.regenerateToken = (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken)
    return res.status(401).json({ message: "You are not authenticated" });

  if (!refreshTokens.includes(refreshToken))
    return res.status(403).json({ message: "Refresh token is not valid" });

  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET_KEY, (err, decodedToken) => {
    if (err)
      return res.status(403).json({ error: "Refresh token is not valid" });

    // remove the earlier refresh token placed in the array
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const tokens = createToken(decodedToken.username);
    const newAccessToken = tokens.accessToken;
    const newRefreshToken = tokens.refreshToken;
    refreshTokens.push(newRefreshToken);
    return res.status(200).json({
      "access-token": newAccessToken,
      "refresh-token": newRefreshToken,
    });
  });
};