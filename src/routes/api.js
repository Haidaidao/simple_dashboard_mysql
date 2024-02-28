const express = require('express')
const routerAPI = express.Router()

const {
    getArticleController,
    createArticleController,
    deleteArticleController,
    updateArticleController
} = require('../controller/ArticleController')

routerAPI.get('/article', getArticleController)
routerAPI.post('/article', createArticleController)
routerAPI.delete('/article', deleteArticleController)
routerAPI.put('/article', updateArticleController)

module.exports = routerAPI