const express = require('express');
const colors = require('colors');
const cors = require('cors');
const connectDb = require('./config/db');
const dotenv = require('dotenv').config();
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const port = process.env.PORT || 5000;

const app = express();

// connect database -> server -> route -> controller

// connect mongodb
connectDb();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//* Serve static assets in production, must be at this location of this file
if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('../frontend/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build','index.html')));
}else {
  app.get('/', (req, res) => {
    res.send('Welcome to DreamTrip!!')
  })
}
 

app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/users', require('./routes/userRoutes'));


// app.get('/', (req, res) => {
//    res.send('Welcome to DreamTrip!')
// });

app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
});