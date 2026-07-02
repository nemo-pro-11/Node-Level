const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile( __dirname + "/Views/index.html")
  // res.sendFile( "/Views/index.html" , {root : __dirname} )

})




const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Nemo1:1QAZ@cluster0.qg5noil.mongodb.net/?appName=Cluster0")
.then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
 })
 .catch((err) => {
   console.log(err);
 });

// mongoose.connect("mongodb://localhost:27017")
app.use(express.urlencoded({ extended: true }));
const Article = require("./models/mySchema")


// Using Model.create()

app.post("/", (req, res) => {
  Article
    .create(req.body)
    .then( () => {
      res.redirect("/hi");
      console.log(req.body)

    })
    .catch( err => {
      console.log(err);
    });
});
 
app.get('/hi', (req, res) => {
  res.send("<h1>تمت العمليه ب نجاح</h1>")
})

// Using Model.save()

// app.post("/", (req, res) => {
//   const article1 = new Article(req.body);
//   article1
//     .save()
//     .then(result => {
//       res.redirect("/hi");
//       console.log(req.body)
//     })
//     .catch( err => {
//       console.log(err);
//     });
// });







