const client=require('../config/db')
const menuCollection = client.db("bistroNestDb").collection('menu');

exports.getMenu=(async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    })