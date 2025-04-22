const express = require('express');
const app = express();
require('dotenv').config();
const USER_SERVICE_PORT = parseInt(process.env.USER_SERVICE_PORT, 10) || 3000;

app.use(express.json());

const userRoutes = require('./routes/users.routes');
app.use('/api', userRoutes);

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(USER_SERVICE_PORT, () => {
    console.log(`User microservice is running on http://localhost:${USER_SERVICE_PORT}`)
})