const express = require("express"); 
const postRoutes = express.Router(); 
const dbo = require("../db/conn"); 
const ObjectId = require("mongodb").ObjectId;

// This section will create a new post.
postRoutes.route("/posts/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      title: req.body.title,
      postText: req.body.postText,
    };
    db_connect.collection("posts").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });

// This section will get a list of all the posts.
postRoutes.route("/posts").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("posts")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });

// This section will get a single post by id
postRoutes.route("/posts/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("posts")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });
   module.exports = postRoutes;