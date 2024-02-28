const { v4: uuidv4 } = require('uuid');
const connectionPromise = require('../config/database')
var connection
;(async () => {
    try{
      
       connection = await connectionPromise

    } catch(error) {
      console.log(error)
    }
    
})()

const getArticleService = async() => {
    const [results, fields] = await connection.query("SELECT * FROM `User`");
    console.log(results)
    return results && results.length > 0 ? results : {}    
}

const createArticleService = async(article) => {
    const id = uuidv4();
    
    const [results, fields] = await connection.query(
        `insert into article (id, title, short_description, slug, content)
         values (?, ?, ?, ?, ?)`,
        [id, article.title, article.short_description, article.slug, article.content]
    )
    
    return results['affectedRows']
}

const deleteArticleService = async(id) => {
    console.log(id)
    const [results, fields] = await connection.query(
        `delete from article where id = ?`,
        [id]
    )
    console.log(results)
    return results['affectedRows']
}

const updateArticleService = async(article) => {
   
    const [results, fields] = await connection.query(
        `update article
         set title = ?, short_description = ?, slug = ?, content = ?
         where id = ?`,
        [article.title, article.short_description, article.slug, article.content, article.id]
    )
    
    return results['affectedRows']
}



module.exports = {
    getArticleService,
    createArticleService,
    deleteArticleService,
    updateArticleService
}

