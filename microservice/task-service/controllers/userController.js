const userService = require("../services/userService");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch(err) {
        res.status(500).json({message: err.message})
    }
}