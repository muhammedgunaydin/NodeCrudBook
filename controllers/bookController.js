const Book = require('../models/Book')

exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body)

    res.status(201).send(`${book.book_name} book created successfully`)
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      err,
    })
  }
}

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find()

    res.status(200).json({ books })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      err,
    })
  }
}
