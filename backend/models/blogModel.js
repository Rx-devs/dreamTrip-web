const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const blogSchema = Schema({
    /* _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: '',
    }, */
    title: String,
    category: String,
    traveler_name: String,
    thumbnail_url: {
        type: String,
        unique: true,
    },
    description: String,
    travel_cost: Number,
    travel_location: String,
    user_rating: Number,

});

blogSchema.path('thumbnail_url').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL');


module.exports = model('Blog', blogSchema);