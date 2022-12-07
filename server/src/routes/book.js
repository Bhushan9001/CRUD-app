const express = require('express');
const { getBook, setBook, update, remove, getBookByID } = require('../controller/book');
const router = express.Router();

router.get('/getbooks',getBook);
router.post('/setbooks',setBook);
router.get('/getbooks/:id',getBookByID);
router.put('/getbooks/update/:id',update)
router.delete('/getbooks/delete/:id',remove);

module.exports =router;