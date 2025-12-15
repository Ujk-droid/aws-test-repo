const user_collection = require("../model/user.model")


exports.createFunction = async (req, res) => {
    try {
        const {userName, email, password} = req.body

        // user check in DB
        const existingUser = await user_collection.findOne({email})
        if(existingUser){
            return res.status(400).json({error: "User is already exists with this email !"})
        }
        
        // create user in DB
        const newUser = await user_collection.create({
            userName,
            email,
            password
        })

        return res.status(201).json({status: "success", data: newUser})
    } catch (error) {
        return res.status(500).json({error: error})
    }
}