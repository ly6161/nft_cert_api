const express = require('express')

const app = express()
global.global_app = app;
require('./routes/CertNftRoutes.js')
require('./routes/UserRoutes.js')

const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test_ssl', (req, res) => {
  res.send('Hello world using SSL')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})