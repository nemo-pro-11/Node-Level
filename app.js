const express = require('express');
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile( __dirname + "/Views/index.html")
})

mongoose.connect("mongodb+srv://Nemo1:1qaz2wsx@cluster0.qg5noil.mongodb.net/?appName=Cluster0").then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
 })
 .catch((err) => {
   console.log(err);
 });

