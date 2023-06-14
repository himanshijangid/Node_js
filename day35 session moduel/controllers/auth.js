const User = require('../models/user');
exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: req.session.isLoggedIn
    });
}

exports.postLogin = (req, res, next) => {
    User.findById('6475daf920fc988a472c1a0c')
        .then(user => {
            req.session.isLoggedIn = true;
            req.session.user = user;
            req.session.save(error => {
                console.log(error);
                res.redirect('/');
            });
        })
        .catch(err => console.log(err));
}

exports.postLogout = (req, res, next) => {
    req.session.destroy(error => {
        console.log(error);
        res.redirect('/');
    })
}