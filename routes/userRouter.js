const express = require('express');

const router = express.Router() 

router.post('/movies',
         async (req, res) => {
            console.log(req.body, 'test for fav movie');

            try {
                await MovieModel.create(req.body);
                res.json({message: `User ${req.body.id} successfully submitted favorite movie`})
            } catch (error) {
                console.error(error.message);
                res.status(500).json({message: error.message});
            }

})

module.exports = router;