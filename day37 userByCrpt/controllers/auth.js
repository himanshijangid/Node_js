const User = require('../models/user');
exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: req.session.isLoggedIn
    });
}


exports.postLogin = (req, res, next) => {
    User.findById('64709133c39bc2464ca20d62')
    .then(user => {
        req.session.isLoggedIn = true;
        req.session.user = user;
        req.session.save(err => {
            console.log(err);
            res.redirect('/');
        });
    })
    .catch(err => console.log(err));
}

exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {
        path: '/signup',
        pageTitle: 'signup',
        isAuthenticated: req.session.isLoggedIn
    });
}

exports.postSignup = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
   
    User.findOne({email : email}) 
    .then(userDoc => {
        if(userDoc) {
            return res.redirect('/signup')
        }
        const user = new user ({
            email : email,
            password : password
        })
    })
    .catch(error => console.log(error))

}


exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    })
}