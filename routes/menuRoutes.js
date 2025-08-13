const express=require('express')
const router=express.Router();
const {getMenu, menuPost}=require('../controllers/menuController');
const { verifyToken } = require('../controllers/jwtController');
const { verifyAdmin } = require('../controllers/userController');

router.get('/menu',getMenu);
router.post('/menu', verifyToken,verifyAdmin, menuPost);
module.exports=router;