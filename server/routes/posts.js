const express = require("express"); 
const postRoutes = express.Router(); 
const dbo = require("../db/conn"); 
// const ObjectId = require("mongodb").ObjectId;

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

   module.exports = postRoutes;