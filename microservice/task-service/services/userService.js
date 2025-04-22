const userRepo = require("../db/userRepository");

exports.getAllUsers = async () => {
    return await userRepo.getAllTasks();
}