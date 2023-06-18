const express = require('express');
const { getBook, setBook, update, remove, getBookByID } = require('../controller/book');
const { requireSignin } = require('../middelware');
const router = express.Router();

router.get('/getbooks',getBook);
router.post('/setbooks',requireSignin,setBook);
router.get('/getbooks/:id',requireSignin,getBookByID);
router.put('/getbooks/update/:id',requireSignin,update)
router.delete('/getbooks/delete/:id',requireSignin,remove);

module.exports = router;