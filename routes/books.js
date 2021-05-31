const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Author = require('../models/author');

// All Books Route
router.get('/', async (req, res) => {
  res.send('Get Books');
});

// New Book Route
router.get('/new', async (req, res) => {
  const authors = await Author.find({});
  res.render('books/new', { authors: authors, book: new Book() });
});

// Create Book Route
router.post('/', async (req, res) => {
  res.send('Create Book');
});

module.exports = router;
