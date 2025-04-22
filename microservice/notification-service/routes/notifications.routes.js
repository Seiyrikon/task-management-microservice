// routes/sample.routes.js
const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const NOTIFICATION_SERVICE_PORT = process.env.NOTIFICATION_SERVICE_PORT || 3001;

// router.get('/', async (req, res) => {
//   try {
//     const [rows] = await db.query('SELECT * FROM tasks');
//     res.json(rows);
//   } catch (err) {
//     res.status(500).send('Error fetching data');
//   }
// });

// router.get("/add-task", (request, response) => {
//     response.send("Add New Task")
//     fetch(`http://localhost:${NOTIFICATION_SERVICE_PORT}/notify`)
// })

router.get("/", (request, response) => {
    response.send("Notification Microservice.")
})

router.get("/notify", (request, response) => {
    console.log("New notification")
    response.send("Notification Sent")
})

module.exports = router;
