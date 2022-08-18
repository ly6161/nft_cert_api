const express = require('express')

const app = express()
global.global_app = app;
require('./routes/CertNftRoutes.js')
require('./routes/UserRoutes.js')

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})