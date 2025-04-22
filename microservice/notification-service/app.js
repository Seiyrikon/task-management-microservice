const express = require('express');
const app = express();
require('dotenv').config();
const NOTIFICATION_SERVICE_PORT = parseInt(process.env.NOTIFICATION_SERVICE_PORT, 10) || 3001;

app.use(express.json());

const notificationRoutes = require('./routes/notifications.routes');
app.use('/api', notificationRoutes);

app.listen(NOTIFICATION_SERVICE_PORT, () => {
    console.log(`Task microservice is running on http://localhost:${NOTIFICATION_SERVICE_PORT}`)
})