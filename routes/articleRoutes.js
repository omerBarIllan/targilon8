const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// Route: Get all articles, Create a new article
router
    .route('/')
    .get(articleController.getArticles) // Fetch all articles
    .post(articleController.createArticle); // Create a new article

// Route: Get, Update, Delete a specific article by ID
router
    .route('/:id')
    .get(articleController.getArticle) // Fetch a single article by ID
    .patch(articleController.updateArticle) // Partially update an article
    .delete(articleController.deleteArticle); // Delete an article by ID

module.exports = router;
