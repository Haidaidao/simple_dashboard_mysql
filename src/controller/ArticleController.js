const {
    getArticleService,
    createArticleService,
    deleteArticleService,
    updateArticleService
} = require("../service/ArticleService")

const getArticleController = async(req, res) => {
    
    const result = await getArticleService()

    if(result.length > 0) 
        return res.status(200).json({
            success: {
                code: 200,
                message: "Success"
            },
            data: {
                result
            }
        })
    else 
        return res.status(400).json({
            error : {
                code: 400,
                message: "Can not get list user"
            }
        })
}

const createArticleController = async(req, res) => {
    
    const result = await createArticleService(req.body)

    if(result>0) 
        return res.status(200).json({
            success: {
                code: 200,
                message: "Success"
            },

        })
    else 
        return res.status(400).json({
            error : {
                code: 400,
                message: "Can not create user"
            }
        })
}

const deleteArticleController = async(req, res) => {

    const result = await deleteArticleService(req.body.id)

    if(result>0) 
        return res.status(200).json({
            success: {
                code: 200,
                message: "Success"
            },

        })
    else 
        return res.status(400).json({
            error : {
                code: 400,
                message: "Can not remove user"
            }
        })
}

const updateArticleController = async(req, res) => {

    const result = await updateArticleService(req.body)

    if(result>0) 
        return res.status(200).json({
            success: {
                code: 200,
                message: "Success"
            },

        })
    else 
        return res.status(400).json({
            error : {
                code: 400,
                message: "Can not update user"
            }
        })
}

module.exports = {
    getArticleController,
    createArticleController,
    deleteArticleController,
    updateArticleController
}