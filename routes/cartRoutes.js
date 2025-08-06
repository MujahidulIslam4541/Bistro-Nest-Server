const express=require('express')
const router=express.Router();
const {postCart}=require('../controllers/cartController')

router.post('/carts',postCart);
module.exports=router;