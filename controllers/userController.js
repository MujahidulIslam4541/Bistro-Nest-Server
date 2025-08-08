const client = require("../config/db");
const userCollection = client.db("bistroNestDb").collection("users");

// POST: User information added to the database
exports.postUser = async (req, res) => {
  const user = req.body;
  const result = await userCollection.insertOne(user);
  res.send(result);
};
