const userRepo = require("../db/userRepository");
const bcrypt = require('bcrypt');

exports.getAllUsers = async () => {
    return await userRepo.getAllUsers();
}

exports.insertUser = async ({username, email, password}) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const userId = await userRepo.insertUser({username, email, password: hashedPassword});
    return {id: userId, username, email};
}