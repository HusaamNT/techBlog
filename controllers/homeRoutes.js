const router = require('express').Router();
const { Account, Post } = require('../models')

router.get('/', async (req, res) => {
    try {console.log(req.session.username)
        res.render('all', {
            title: 'Home',
            message: 'Welcome to my website!',
            username: req.session.username
        });    
    } catch (err) {
            res.status(500).json(err);
        }
    });

module.exports = router;
