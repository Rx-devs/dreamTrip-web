const asyncHandler = require('express-async-handler');
const Blog = require('../models/blogModel');

const getBlogs = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    // res.status(200).json({
    //     message: 'all blogs'
    // });

    const blogs = await Blog.find();
    res.status(200).json(blogs);
});

module.exports = {
    getBlogs
}