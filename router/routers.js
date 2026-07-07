const express = require("express");
const { model } = require("mongoose");
const app = express.Router();
const Article = require("../models/mySchema");
const moment = require("moment");


// Wab Page preparation

app.get("/", (req, res) => {
  Article.find()
    .then((Data) => {
      res.render("index.ejs", { arr: Data, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/user/add.html", (req, res) => {
  res.render("user/add.ejs");
});

app.get("/edit/:id", (req, res) => {
  Article.findById(req.params.id)
    .then((Data) => {
      res.render("user/edit.ejs", { Id: req.params.id, data: Data });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/user/search.html", (req, res) => {
  res.render("user/search.ejs", {});
});

app.get("/view/:id", (req, res) => {
  Article.findById(req.params.id)
    .then((Data) => {
      res.render("user/view.ejs", { data: Data, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/post", (req, res) => {
  Article.create(req.body)
    .then((data) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/search", (req, res) => {
  Article.find({   $or : [   {UserName : req.body.search} , {LastName : req.body.search} ]    })
    .then((Data) => {
      console.log(Data)
      res.render("user/search.ejs" , {data : Data});
    })
    .catch((err) => {
      console.log(err);
    });
});

app.put("/edit/:id", (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then((Data) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Delete Data
app.delete("/delete/:id", (req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = app; // تأكد من وجود هذا السطر!
