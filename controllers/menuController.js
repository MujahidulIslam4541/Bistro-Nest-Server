const client = require("../config/db");
const menuCollection = client.db("bistroNestDb").collection("menu");

exports.getMenu = async (req, res) => {
  const result = await menuCollection.find().toArray();
  res.send(result);
};

exports.menuPost = async (req, res) => {
  const menu = req.body;
  const result = await menuCollection.insertOne(menu);
  res.send(result);
};
