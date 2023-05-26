const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const User = require('./models/user');
// const mongoConnect = require('./util/database').mongoConnect;
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
  // User.findById('646f2f3972c5ed7ccf8a16e2')
  //   .then(user => {
  //     req.user = new User(user.name, user.email, user.cart, user._id);
  //     next();
  //   })
  //   .catch(err => console.log(err));
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb+srv://himanshijangid444:himanshijangid444@cluster0.m0npxln.mongodb.net/shop?retryWrites=true&w=majority')
.then(result => {
  app.listen(3000);
  console.log('sever listen on port : 3000 ');

})
.catch(error => console.log(error));