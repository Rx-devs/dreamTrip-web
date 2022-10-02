const express = require('express');
const { getBlogs } = require('../controllers/blogController');
const router = express.Router();


router.get('/', getBlogs);

/* router.get('/', (req, res) => {
    res.status(200).json({
        message: 'got blogs too'
    });
}); */

module.exports = router;