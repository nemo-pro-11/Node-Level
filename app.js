const express = require("express");
const app = express();
const port = 3000;

// Wab Page preparation

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index.ejs", {});
});

app.get("/user/add.html", (req, res) => {
  res.render("user/add.ejs", {});
});

app.get("/user/view.html", (req, res) => {
  res.render("user/view.ejs", {});
});

app.get("/user/edit.html", (req, res) => {
  res.render("user/edit.ejs", {});
});

app.get("/user/search.html", (req, res) => {
  res.render("user/search.ejs", {});
});

// connected Database
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
const Article = require("./models/mySchema");

mongoose
  .connect(
    "mongodb+srv://Nemo1:1QAZ@cluster0.qg5noil.mongodb.net/AllData?appName=Cluster0",
    // "mongodb://localhost:27017"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/", (req, res) => {
  Article.create(req.body)
    .then((data) => {
      res.redirect("/user/add.html");
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});



// connected Style
app.use(express.static("public"));
//auto Style

const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
const console = require("console");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
