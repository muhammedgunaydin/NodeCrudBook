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

exports.getBookbyId = async (req, res) => {
  try {
    const book = await Book.findById({ _id: req.params.id })

    res.status(200).json({ book })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      err,
    })
  }
}

// exports.updateBook = async (req, res) => {
//   try {
//     const book = await Book.findById({_id: req.params.id })
//     book.book_author = req.body.book_author
//     book.save()
//     res.status(200).json({ book })
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       err,
//     })
//   }
// }

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    )
    res.status(200).send('Book updated successfully')
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      err,
    })
  }
}

exports.deleteBook = async (req, res) => {
    try{
        const book = await Book.findByIdAndDelete({ _id: req.params.id})
        res.status(200).send('Book deleted successfully')
    }catch(err) {
        res.status(400).json({
            status:'fail',
            err,
        })
    }
}
