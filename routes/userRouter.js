const express = require('express');
const Movie = require('../models/Movies');
const MovieModel = require('../models/Movies');
const { db } = require('../models/Movies');

const router = express.Router() 

router.post('/movies',
         async (req, res) => {
            console.log(req.body, 'test for fav movie');

            try {
                await Movie.create(req.body);
                res.json({message: `User ${req.body.id} successfully submitted favorite movie`})
            } catch (error) {
                console.error(error.message);
                res.status(500).json({message: error.message});
            }


})
router.get('/all', async (req, res) => {
    //db.collection('movies').find() other way of finding method
    
    try{
        const movieArray = await Movie.find({}, {id: 1, _id: 0, movie:1})
        console.log(movieArray);
        res.json(movieArray);
    } catch(error) {
        console.error(error.message || error);
        res.status(500).json({message: error.message}); //you set the status code to 500
        //by default you want to send errors as json files
    }
})


//find user by username
router.get('/username/:id', async (req, res) => {
    try {
        const query = { id: req.params.id }
        const projection = { id: 1, movie: 1, _id: 0}
        const movieArray = await Movie.findOne({id: req.params.id}, projection);
        console.log(movieArray);
        res.json(movieArray)
    } catch (error) {
        console.error(error.message || error);
        res.status(500).json({message: error.message});
    }
})

module.exports = router;