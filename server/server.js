var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var cartCtrl = require('./backControllers/cartCtrl');
// var users = require('public');
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./schemas/userSch.js');
var productCtrl = require('./backControllers/productCtrl');
var loginCtrl = require('./backControllers/loginPageCtrl.js');

mongoose.connect('mongodb://localhost/protest', function(err) {
	if(err) throw err;
});

var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};


var app = express();
app.use(express.static(__dirname+'./../public'));
app.use(bodyParser.json());
app.use(session({
	secret: 'tabbycat'
}))
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (user.password !== password) { return done(null, false); }
      return done(null, user);
    });
  }
));



var port = 3000;

app.get('/api/cart', cartCtrl.read);
app.get('/api/cart/:id', cartCtrl.read);
app.post('/api/cart', cartCtrl.create);
app.put('/api/cart', isAuthed, cartCtrl.update);
app.delete('/api/cart/:id', cartCtrl.destroy);

app.post('/api/product', productCtrl.create);
app.get('/api/product', productCtrl.read);
// app.get('/api/product',)
// app.get('/api/product')
app.put('/api/product/:id', productCtrl.update);
app.delete('/api/product/:id', productCtrl.destroy);


// app.post('/api/login', loginCtrl.login);
app.post('/api/register', loginCtrl.register);
app.get('/api/login', loginCtrl.read);
app.put('/api/login', loginCtrl.update);





//Passport Endpoints
app.post('/api/login', passport.authenticate('local', {
  successRedirect: '/api/login'
}));
app.get('/api/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send('logged out');
});




app.listen(port, function(){
	console.log('its working!!');
})