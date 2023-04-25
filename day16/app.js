const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const errorController  = require('./controllers/error')

const adminRoutes = require('./routes/admin')
const shopRouters = require('./routes/shop');

app.set('view engine', 'ejs');
app.set('views' , 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/admin',adminRoutes);
app.use(shopRouters);


app.use(errorController.get404)


app.listen(5000);