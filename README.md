# NodeCrudBook

CRUD API example is written in [NodeJS](https://nodejs.org/en/) using [Express](https://expressjs.com) 
package and [MongoDB](https://www.mongodb.com) database.

## Requirements
- [NodeJS](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com)
- Code Editor

## Instructions

- Clone the repository and move to the project directory:
  ```bash
    git clone https://github.com/muhammedgunaydin/NodeCrudBook.git
  ```
  ```bash
    cd NodeCrudBook
  ```
  ```bash
    npm init
  ```
  ```bash
    npm start
  ```
  
## Usage Examples
-  Get All Book
```bash
    curl -X GET localhost:3000/books
```
-  Get Book (by id)
```bash
    curl -X GET localhost:3000/books/:id
```
-  Add Book
```bash
    curl -X POST localhost:3000/books/create
      '{ "isbn" : 2434724161,
          "book_name" : "NodeJS For Beginners",
          "author": "Muhammed Günaydın",
          "page_count" : 174,
          "book_count": 2,
         }'
```
-  Delete Book (by id)
```bash
    curl -X DELETE localhost:3000/books/:id
```
-  Update Book (by id)
```bash
    curl -X PATCH localhost:3000/books/:id
       '{ "isbn" : 4587326545,
          "book_name" : "NodeJS For Beginners",
          "author": "Muhammed Günaydın",
        	"page_count" : 174,
          "book_count": 2,
         }'
```
