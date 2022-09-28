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
