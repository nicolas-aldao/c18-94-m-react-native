const express = require('express')
const app = require('./src/app')

const port = 3000



app.use(express.json())
app.listen(port, '0.0.0.0')
// app.listen(port, () => {
//   console.log(`Server listening on http://localhost:${port}`)
// })

