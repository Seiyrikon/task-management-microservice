const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (request, response) => {
    response.send("Notification Microservice.")
})

app.get("/notify", (request, response) => {
    console.log("New notification")
    response.send("Notification Sent")
})

app.listen(PORT, () => {
    console.log(`Notification microservice is running on http://localhost:${PORT}`)
})