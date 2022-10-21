// SEED FILE CONNECT TO MONGODB ON ITS OWN
// *RUN  node seed/seeds.js from the same level as the server or .env variables === undefined

const mongoose = require('mongoose');
// Schema must match the seed
const Blog = require('../models/blogModel');

//**PROTECT CREDS WITH THIS .ENV INSTEAD OF BRADS' DEFAULTJSON
require('dotenv').config();
const db = process.env.MONGO_URI;

// STAND ALONE CONNECTION TO DB;
mongoose
  .connect(db)
  .then(() => console.log('mongodb SEED connection success'))
  .catch((error) => console.log(error));

// MOCK DATA
const seedBlogs = [
    {
       "title":"Rurikarakusa",
        "category":"Japan Trip",
        "traveler_name":"Aileen Adalid",
        "thumbnail_url":"https://i.ibb.co/HBDTk95/ex-Content.jpg",
        "description":"Rurikarakusa is a low-growing plant that has pretty baby blue flowers …",
        "travel_cost":"200",
        "travel_location":"Japan",
        "user_rating":"4" 
    },
    {
        "title":"Cannes",
        "category":"French Road Trip",
        "traveler_name":"Aileen Adalid",
        "thumbnail_url":"https://i.ibb.co/HBDTk95/ex-Content.jpg",
        "description":"Since 1946, people have been flocking Cannes to attend its world-renow…",
        "travel_cost":"300",
        "travel_location":"France",
        "user_rating":"3"
    },
    {
       "title":"Rurikarakusa",
        "category":"Japan Trip",
        "traveler_name":"Aileen Adalid",
        "thumbnail_url":"https://i.ibb.co/HBDTk95/ex-Content.jpg",
        "description":"Rurikarakusa is a low-growing plant that has pretty baby blue flowers …",
        "travel_cost":"200",
        "travel_location":"Japan",
        "user_rating":"4" 
    },
    {
        "title":"Cannes",
        "category":"French Road Trip",
        "traveler_name":"Aileen Adalid",
        "thumbnail_url":"https://i.ibb.co/HBDTk95/ex-Content.jpg",
        "description":"Since 1946, people have been flocking Cannes to attend its world-renow…",
        "travel_cost":"300",
        "travel_location":"France",
        "user_rating":"3"
    },
    {
       "title":"Rurikarakusa",
        "category":"Japan Trip",
        "traveler_name":"Aileen Adalid",
        "thumbnail_url":"https://i.ibb.co/HBDTk95/ex-Content.jpg",
        "description":"Rurikarakusa is a low-growing plant that has pretty baby blue flowers …",
        "travel_cost":"200",
        "travel_location":"Japan",
        "user_rating":"4" 
    },
    {
        "title":"Cannes",
        "category":"French Road Trip",
        "traveler_name":"Aileen Adalid",
        "thumbnail_url":"https://i.ibb.co/HBDTk95/ex-Content.jpg",
        "description":"Since 1946, people have been flocking Cannes to attend its world-renow…",
        "travel_cost":"300",
        "travel_location":"France",
        "user_rating":"3"
    },
    {
       "title":"Rurikarakusa",
        "category":"Japan Trip",
        "traveler_name":"Aileen Adalid",
        "thumbnail_url":"https://i.ibb.co/HBDTk95/ex-Content.jpg",
        "description":"Rurikarakusa is a low-growing plant that has pretty baby blue flowers …",
        "travel_cost":"200",
        "travel_location":"Japan",
        "user_rating":"4" 
    },
    {
        "title":"Cannes",
        "category":"French Road Trip",
        "traveler_name":"Aileen Adalid",
        "thumbnail_url":"https://i.ibb.co/HBDTk95/ex-Content.jpg",
        "description":"Since 1946, people have been flocking Cannes to attend its world-renow…",
        "travel_cost":"300",
        "travel_location":"France",
        "user_rating":"3"
    },
    {
       "title":"Rurikarakusa",
        "category":"Japan Trip",
        "traveler_name":"Aileen Adalid",
        "thumbnail_url":"https://i.ibb.co/HBDTk95/ex-Content.jpg",
        "description":"Rurikarakusa is a low-growing plant that has pretty baby blue flowers …",
        "travel_cost":"200",
        "travel_location":"Japan",
        "user_rating":"4" 
    },
    {
        "title":"Cannes",
        "category":"French Road Trip",
        "traveler_name":"Aileen Adalid",
        "thumbnail_url":"https://i.ibb.co/HBDTk95/ex-Content.jpg",
        "description":"Since 1946, people have been flocking Cannes to attend its world-renow…",
        "travel_cost":"300",
        "travel_location":"France",
        "user_rating":"3"
    },
    {
       "title":"Rurikarakusa",
        "category":"Japan Trip",
        "traveler_name":"Aileen Adalid",
        "thumbnail_url":"https://i.ibb.co/HBDTk95/ex-Content.jpg",
        "description":"Rurikarakusa is a low-growing plant that has pretty baby blue flowers …",
        "travel_cost":"200",
        "travel_location":"Japan",
        "user_rating":"4" 
    },
    {
        "title":"Cannes",
        "category":"French Road Trip",
        "traveler_name":"Aileen Adalid",
        "thumbnail_url":"https://i.ibb.co/HBDTk95/ex-Content.jpg",
        "description":"Since 1946, people have been flocking Cannes to attend its world-renow…",
        "travel_cost":"300",
        "travel_location":"France",
        "user_rating":"3"
    }
];

//   seeding function
const seedDB = async () => {
  // deletes any existing collections before seeding
  await Blog.deleteMany({});
  await Blog.insertMany(seedBlogs);
  console.log('seedDB function ran');
};
//   call the function and it's promise to close this connection after seeding
seedDB().then(() => {
  console.log('seeds closed connection');
  mongoose.connection.close();
});
