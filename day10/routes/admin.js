const express = require ('express');

const router = express.Router();

// router.get  ('/add-product' , (req,res,next) => {
//     // res.send("<form action = '/admin/product' method = 'post'><input type = 'text' name = 'title'><button>Add product</button></form>")
    
// })

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
})


router.post('/product',(req,res,next) => {
    console.log(req.body);
    // res.send('<h1>Data Save successful</h1>')
    res.redirect('/');
})

module.exports = router;