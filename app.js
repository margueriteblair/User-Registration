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
    mongoose.connect(URI, mongooseOptions, (error) => {
       return error ? `\nError Connecting to MongoDB: ${error.message || error} \n` : `Server Connected to DB`
    })
} else {
    console.error('Invalid connection to database, URI type !== string');
}

//importing routes
const homeRouter = require('.routes/homeRouter');
const userRouter = require('.routes/userRouter');

app.use('/', homeRouter);
app.use('/profile', userRouter);

app.listen(port, () => {
    console.log(`Now successfully listening to ${port}`);
})