const express = require('express');
//const mongoose = require('mongoose')
//const Article = require('./models/blogs')
const app = express();
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport');
const postBlog = require('./routes/blogs')


app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.use(cookieSession({
	name: 'google-auth-session',
	keys: ['key1', 'key2']
}));
app.use(passport.initialize());
app.use(passport.session());
	

app.get('/', (req, res) => {
	res.render('blogs/login')
});

// Auth
app.get('/auth' , passport.authenticate('google', { scope:
	[ 'email', 'profile' ]
}));

// Auth Callback
app.get( '/auth/callback',
	passport.authenticate( 'google', {
		successRedirect: '/auth/callback/success',
		failureRedirect: '/auth/callback/failure'
}));

// Success
app.get('/auth/callback/success' , (req , res) => {
	if(!req.user)
		res.redirect('/auth/callback/failure');
		res.render('blogs/welcome', {user: req.user.displayName});
});

// failure
app.get('/auth/callback/failure' , (req , res) => {
	res.send("Error");
})

app.use('/blogs', postBlog)
app.listen(4000 , () => {
	console.log("Server Running on port 4000");
});
