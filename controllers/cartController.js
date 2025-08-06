const client = require("../config/db");
const cartCollection = client.db("bistroNestDb").collection("carts");


// POST: Add item to cart
exports.postCart = async (req, res) => {
  const cartItem=req.body;
  const result=await cartCollection.insertOne(cartItem)
  res.send(result);
};

// GET: Get all cart items

exports.getCart=async(req,res)=>{
    const result=await cartCollection.find().toArray()
    res.send(result)
}
