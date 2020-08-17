//imported packages
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

//environment variables
const port = process.env.PORT || 3000
const mongooseURI = process.env.MONGO_DB

//setup for app.js page
let app = express();
app.use(express.static('public')); //allows static html files to be served
app.use(express.json()) //allows json files to be parsed

if (typeof(mongooseURI) === 'string') {
    const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    mongoose.connect(mongooseURI, mongooseOptions, (error) => {
       console.log(error ? `\nError Connecting to MongoDB: ${error.message || error} \n` : `Server Connected to DB`
    )})
} else {
    console.error('Invalid connection to database, URI type !== string');
}

//importing routes
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const MovieModel = require('./models/Movies');

app.use('/', homeRouter);
app.use('/profile', userRouter);

const findMovie = MovieModel.find({}, (error, data) => {
    console.log(error ? `Error connecting to MongoDB ${error.message}` : data);
})

app.listen(port, () => {
    console.log(`Now successfully listening to ${port}`);
})

module.exports = findMovie;