const { ObjectId } = require("mongodb");
const client = require("../config/db");
const userCollection = client.db("bistroNestDb").collection("users");

// POST: User information added to the database
exports.postUser = async (req, res) => {
  const user = req.body;
  const query = { email: user.email };
  const existingUser = await userCollection.findOne(query);
  if (existingUser) {
    return res.send({ message: "user already exits", insertedId: null });
  }
  const result = await userCollection.insertOne(user);
  res.send(result);
};

// GET :get all Users in database
exports.getAllUsers = async (req, res) => {
  const users = await userCollection.find().toArray();
  res.send(users);
};

// DELETE: Delete a user from the database
exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await cartCollection.deleteOne(query);
  res.send(result);
};
