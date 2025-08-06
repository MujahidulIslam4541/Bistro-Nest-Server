const express=require('express')
const router=express.Router();
const {postCart, getCart}=require('../controllers/cartController')


// POST route to add item
router.post('/cart',postCart);

// GET route to get all items
router.get('/carts',getCart)
module.exports=router;