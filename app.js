const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // res.sendFile( "/Views/index.html",{root :__dirname})
  res.sendFile( __dirname + "/Views/index.html")
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})