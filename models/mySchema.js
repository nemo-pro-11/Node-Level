const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  UserNemo: String,
  Age : Number
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
