const express = require('express')
const volleyball = require('volleyball')
const bookRoute = require('./routes/bookRoute')
const dbconn = require('./db/dbconn')

const app = express()

app.use(volleyball)
app.use(express.json())

app.use('/books', bookRoute)
  
const port = 3000
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
