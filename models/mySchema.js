const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  UserName: String,
  LastName: String,
  Telephone: String,
  Email: String,
  Age: Number,
  Country : String,
  Gender : String,

} , {timestamps : true} );

const Article = mongoose.model("User", articleSchema);
module.exports = Article;
