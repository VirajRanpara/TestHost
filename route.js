var express = require('express')
var router = express.Router();
var Movie = require('./Models/movie')

router.get("/movies",async(req,res)=>{
    const iMovie = await
    Movie.find();
    res.send(iMovie);
});

module.exports = router