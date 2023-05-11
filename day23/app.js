const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const User = require('./models/user');
const Product = require('./models/product');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use ((req,res,next) => {
    User.findByPk(1)
    .then(user => {
        req.user = user ;
        next()

    }).catch (error => console.log(error))
})

 

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints : true , onDelete : 'CASCADE'});
User.hasMany(Product); 




sequelize
    .sync()
   // .sync({force :true})
    .then(result => {
        return User.findByPk(1);

       }).then(user => {
        if (!user) {
            return User.create ({
                name : 'Ram',
                email : 'ram@gmail.com'
            })
            return user;
        }
        
    } )
    .then (cart => {
        app.listen(8000);
        console.log('Server is listen on Port: 8000');
    })
    .catch(err => { console.log(err) })

