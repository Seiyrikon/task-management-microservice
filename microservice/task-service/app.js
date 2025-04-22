const express = require('express');
const app = express();
require('dotenv').config();
const TASK_SERVICE_PORT = parseInt(process.env.TASK_SERVICE_PORT, 10) || 3000;

app.use(express.json());

const taskRoutes = require('./routes/tasks.routes');
app.use('/api', taskRoutes);

app.listen(TASK_SERVICE_PORT, () => {
    console.log(`Task microservice is running on http://localhost:${TASK_SERVICE_PORT}`)
})