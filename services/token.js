const jwt = require("jsonwebtoken");

function generateJWToken(userID) {
  const accessToken = jwt.sign({ userID }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });
  return accessToken;
}

module.exports = generateJWToken;
