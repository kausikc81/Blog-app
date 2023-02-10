const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser((user , done) => {
	done(null , user);
})
passport.deserializeUser(function(user, done) {
	done(null, user);
});

passport.use(new GoogleStrategy({
	clientID:"17135261975-2t3qtncra0od3fh6qlr65660730vfk6o.apps.googleusercontent.com", // Your Credentials here.
	clientSecret:"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", // Your Credentials here.
	callbackURL:"http://localhost:4000/auth/callback",
	passReqToCallback:true
},
function(request, accessToken, refreshToken, profile, done) {
	return done(null, profile);
}
));
