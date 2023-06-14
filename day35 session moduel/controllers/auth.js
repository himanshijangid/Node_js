exports.getLogin = (req, res, next) => {
    // const isLoggedIn = req.get('Cookie').split('=')[1]
    // console.log(req.get('Cookie'))
    // console.log(req.get('Cookie').split('=')[1])
    console.log(req.session.isLoggedIn);
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
    });
}

exports.postLogin = (req, res, next) =>{
    User.findById('6475daf920fc988a472c1a0c')
      .then(user => {
          req.session.isLoggedIn = true;
        req.session.user = user;
        res.redirect('/');
       
      })
      .catch(err => console.log(err));
  }


  
exports.postLogout = (req, res, next) => {
     req.session.destroy (error => {
        console.log(error);
         res.redirect('/');
     }
 )
}