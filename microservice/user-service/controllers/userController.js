const userService = require("../services/userService");
const {userSchema} = require('../middlewares/userValidation');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch(err) {
        res.status(500).json({message: err.message})
    }
}

exports.insertUser = async(req, res) => {
    const {error} = userSchema.validate(req.body);

    if(error) {
        return res.status(400).json({message: error.details[0].message, fileOrigin: 'userController.js'});
    }

    try {
        const newUser = await userService.insertUser(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({message: err.message, fileOrigin: 'userController.js'});
    }
}