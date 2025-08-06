const client = require("../config/db");
const cartCollection = client.db("bistroNestDb").collection("carts");

exports.postCart = async (req, res) => {
  const cartItem=req.body;
  const result=await cartCollection.insertOne(cartItem)
  res.send(result);
};
