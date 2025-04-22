const express = require('express');
const app = express();
const TASK_SERVICE_PORT = 3000;
const NOTIFICATION_SERVICE_PORT = 3001;

app.use(express.json());

app.get("/", (request, response) => {
    response.send("Task Microservice.")
})

app.get("/add-task", (request, response) => {
    response.send("Add New Task")
    fetch(`http://localhost:${NOTIFICATION_SERVICE_PORT}/notify`)
})

app.listen(TASK_SERVICE_PORT, () => {
    console.log(`Task microservice is running on http://localhost:${TASK_SERVICE_PORT}`)
})