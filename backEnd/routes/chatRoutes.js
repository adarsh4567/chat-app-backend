const express = require('express');
const {accessChat, fetchChat, createGroupChat, renameGroup, addToGroup, removeFromGroup} = require('../controllers/chatControllers');
const protect = require('../middleware/authmiddleware');

const router = express.Router();

router.post('/',protect,accessChat);
router.get('/',protect,fetchChat);
router.post('/group',protect,createGroupChat);
router.put('/rename',protect,renameGroup);
router.put('/groupadd',protect,addToGroup);
router.put('/groupremove',protect,removeFromGroup);


module.exports=router;