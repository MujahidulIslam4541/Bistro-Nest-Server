const jwt = require("jsonwebtoken");
const client = require("../config/db");

exports.jwtPost = async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  res.send({ token });
};

exports.verifyToken = (req, res, next) => {
  console.log(req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Forbidden Access" });
  }
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "Forbidden Access" });
  }
  jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (error, decoded) => {
    if (error) {
      return res.status(404).send({ message: "Unauthorized Access" });
    }
    req.decoded = decoded;
    next();
  });
};
