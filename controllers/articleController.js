const articleService = require('../services/articleService');

// Controller: Create a new article
const createArticle = async (req, res) => {
    try {
        const article = await articleService.createArticle(req.body.title, req.body.published);
        res.status(201).json(article);
    } catch (error) {
        res.status(500).json({ errors: [error.message] });
    }
};

// Controller: Get all articles
const getArticles = async (req, res) => {
    try {
        const articles = await articleService.getArticles();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ errors: [error.message] });
    }
};

// Controller: Get a single article by ID
const getArticle = async (req, res) => {
    try {
        const article = await articleService.getArticleById(req.params.id);
        if (!article) {
            return res.status(404).json({ errors: ['Article not found'] });
        }
        res.json(article);
    } catch (error) {
        res.status(500).json({ errors: [error.message] });
    }
};

// Controller: Update an article
const updateArticle = async (req, res) => {
    try {
        const updatedArticle = await articleService.updateArticle(req.params.id, req.body.title);
        if (!updatedArticle) {
            return res.status(404).json({ errors: ['Article not found'] });
        }
        res.json(updatedArticle);
    } catch (error) {
        res.status(500).json({ errors: [error.message] });
    }
};

// Controller: Delete an article
const deleteArticle = async (req, res) => {
    try {
        const deletedArticle = await articleService.deleteArticle(req.params.id);
        if (!deletedArticle) {
            return res.status(404).json({ errors: ['Article not found'] });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ errors: [error.message] });
    }
};

module.exports = {
    createArticle,
    getArticles,
    getArticle,
    updateArticle,
    deleteArticle,
};
