const express = require('express')
const mongoose = require('mongoose')
const volleyball = require('volleyball')

const app = express()

mongoose
  .connect('mongodb://127.0.0.1/NodeCrudBook-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })

app.use(volleyball)
app.use(express.json())

app.get('/', (req, res) => {
  res.json('welcome home page')
})



const port = 3000
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
