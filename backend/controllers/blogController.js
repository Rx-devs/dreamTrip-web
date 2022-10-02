const asyncHandler = require('express-async-handler');
const Blog = require('../models/blogModel');

const getBlogs = asyncHandler(async (req, res, next) => {
    // console.log(req.body);
    // res.status(200).json({
    //     message: 'all blogs'
    // });

    const blogs = await Blog.find({});
    // console.log(blogs);
    const page = req.query.page;
    const size = parseInt(req.query.size);
    let allblogs;
    const count = await Blog.countDocuments({});

    if(page){
        allblogs = await Blog.find({}).skip(page*size).limit(size).exec();
    }
    else{
        allblogs = blogs;
    }
    
    res.send({
        count,
        allblogs
    });
    // res.status(200).json(blogs); 
});

module.exports = {
    getBlogs
}