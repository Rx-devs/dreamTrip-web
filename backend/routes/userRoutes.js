const express = require('express');
const { getUsers } = require('../controllers/userController');
const router = express.Router();


router.get('/', getUsers);

/* router.get('/', (req, res) => {
    res.status(200).json({
        message: 'got blogs too'
    });
}); */

module.exports = router;