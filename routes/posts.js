const express = require("express");
const router = express.Router();

const pgp = require("pg-promise")();
const connection = {
  host: "localhost",
  port: 5432,
  database: "facebook_db"
};

const db = pgp(connection);
router.get("/all", (req, res) => {
  db.any("SELECT * FROM posts")
    .then(function(data) {
      const response = {
        posts: data
      };
      res.send(response);
    })
    .catch(function(error) {
      res.send(error);
    });
});
//this is where we left off
router.get("/:user_id", async (req, res, next) => {
  try{ 
     let userPosts = await db.any('SELECT * FROM posts WHERE poster_id = $1',req.params.id)
      res.status(200).json({
        userPosts, status: 'success', message: 'all users Posts'
      })

  }catch(err){ 
    next(err)
  }
  // res.send('Sending all post from this user!');
});

router.post("/register", (req, res) => {
  res.send("Creating new post!");
});

module.exports = router;
