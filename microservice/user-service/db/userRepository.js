const db = require("./connection")
require('dotenv').config();

exports.getAllUsers = async () => {
    const sql = process.env.SELECT_ALL_USER;
    const [rows] = await db.query(sql);
    return rows;
}

exports.insertUser = async ({username, email, password}) => {
    try {
        const sql = process.env.INSERT_USER;
        const [result] = await db.execute(sql, [username, email, password]);
        return result.insertId;
    } catch (err) {
        if(err.code === 'ER_DUP_ENTRY') {
            throw new Error('Email already exists.');
        }
        throw err;
    }
}