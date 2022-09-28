const express = require('express')
const bookController = require('../controllers/bookController')
// const Book = require('../models/Book')

const router = express.Router()

router.route('/create').post(bookController.createBook)
router.route('/').get(bookController.getAllBooks)

module.exports = router