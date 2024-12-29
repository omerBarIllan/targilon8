const Article = require('../models/Article');

// Service: Create a new article
const createArticle = async (title, published) => {
    const article = new Article({ title });
    if (published) article.published = published;
    return await article.save();
};

// Service: Get all articles
const getArticles = async () => {
    return await Article.find({});
};

// Service: Get an article by ID
const getArticleById = async (id) => {
    return await Article.findById(id);
};

// Service: Update an article
const updateArticle = async (id, title) => {
    const article = await getArticleById(id);
    if (!article) return null;
    article.title = title;
    return await article.save();
};

// Service: Delete an article
const deleteArticle = async (id) => {
    const article = await getArticleById(id);
    if (!article) return null;
    await article.remove();
    return article;
};

module.exports = {
    createArticle,
    getArticles,
    getArticleById,
    updateArticle,
    deleteArticle,
};
