const express = require('express');
const { getUser, getUsers, postUser } = require('../controllers/userController');
const router = express.Router();


router.get('/', getUsers);
router.get('/:email', getUser);
router.post('/', postUser);

/* router.get('/', (req, res) => {
    res.status(200).json({
        message: 'got blogs too'
    });
}); */

module.exports = router;