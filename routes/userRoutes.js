const express=require('express');
const router=express.Router();
const { postUser } = require('../controllers/userController');


router.post('/user',postUser)
module.exports=router;