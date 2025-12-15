const {userBodySchema} = require("../validators/user.validationschema")


exports.createValidationMiddleware = (req, res, next) => {
    try {
        userBodySchema.parse(req.body)
        next()
    } catch (error) {
        return res.status(400).json({error: error})
    }
}

