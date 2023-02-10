const express = require('express')
const router = express.Router();
const Controller = require('../controllers/index')

router.get('/newblog', (req, res) => {
  res.render('blogs/new')
})


router.get('/allposts', Controller.allposts);

router.get('/post/:id', Controller.post);

router.post('/newpost', Controller.newpost);


module.exports = router