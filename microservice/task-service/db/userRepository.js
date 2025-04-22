const db = require("./connection")

exports.getAllTasks = async () => {
    const [rows] = await db.query('SELECT * FROM users')
    return rows;
}