const express = require("express");
const app = express();
const port = 3000;

const methodOverride = require("method-override");
app.use(methodOverride("_method"));


const Router = require('./router/routers')


// connected Database
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(
    // "mongodb+srv://Nemo1:1QAZ@cluster0.qg5noil.mongodb.net/AllData?appName=Cluster0",
    "mongodb://localhost:27017",
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
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



app.use(Router)
