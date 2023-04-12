const express = require ("express");
const bodyParser= require("body-parser");

const adminRouters = require("./routes/admin") 
const shopRouters = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin',adminRouters);
app.use(shopRouters);

// app.use((req,res,next) => {
//     res.send('<h1>Error 404. Page not found</h1>');
//     res.redirect('/');
// })

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(8000)