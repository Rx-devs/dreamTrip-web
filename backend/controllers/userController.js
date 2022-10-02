const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const getUsers = asyncHandler(async (req, res, next) => {
    // console.log(req.body);
    // res.status(200).json({
    //     message: 'all blogs'
    // });

    const users = await User.find({});
    res.status(200).json(users);
});

const getUser = asyncHandler(async (req, res, next) => {
    console.log(req.params);
    const email = req.params.email;
    const user = await User.findOne({email:email}).exec();
    res.status(200).json(user);
});

const postUser = asyncHandler(async (req, res, next) => {
    const newUser = new User(req.body);
    await newUser.save((err) => {
        if (err) {
            res.status(500).json({
                error:'error found'
            })
        } else {
            res.status(200).json({
                message:'added succesfully'
            })
        }
    });
});

module.exports = {
    getUsers, postUser, getUser
}