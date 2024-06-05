require('dotenv').config();
const express = require('express')
const app = require('./src/app')

const port = 3000

app.use(express.json())
app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on http://${process.env.MY_IP}:${port}`);
});

