const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = Schema({
    /* name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
     */
    email: {
        type: String,
	required: true,
    },
    displayName: String,
    role: String,
});


module.exports = model('User', userSchema);