const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const User = require('../models/user');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

// const transporter = nodemailer.createTransport(sendgridTransport({
//     auth:{
//         api_key: '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'
//     }
// }))
exports.getLogin = (req, res, next) => {
   let message = req.flash('error');
   if(message.length > 0) {
    message = message[0]
   }else{
    message = null;
   }
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated : req.session.isLoggedIn,
        errorMessage : message
    });
}

exports.getSignup = (req, res, next) => {
    let message = req.flash('error');
    if(message.length > 0) {
     message = message[0]
    }else{
     message = null;
    }
    res.render('auth/signup', {
        path: '/signup',
        pageTitle: 'signup',
        isAuthenticated : req.session.isLoggedIn,
        errorMessage : message
    });
}

exports.postLogin = (req, res, next) => {
    
    const email = req.body.email;
    const password = req.body.password;
    User.findOne ({ email : email})
    .then(user => {
     if(!user){
        req.flash('error', 'Email empty or Invaild.');
            return res.redirect('/login');
        }
        bcrypt
        .compare(password , user.password)
        .then(doMatch => {
            if(doMatch) {
                req.session.isLoggedIn = true;
                req.session.user = user;
                return req.session.save(error => {
                    console.log(error);
                    res.redirect('/');
                });
            }
            req.flash('error', 'Incorrect password.');
            return res.redirect('/login')

        }).catch(error => {
            console.log(error);

        })
        
    })
}

exports.postSignup = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
   
    User.findOne({email : email}) 
    .then(userDoc => {
        if(userDoc) {
            req.flash('error','E-mail already exists, take different one.')
            return res.redirect('/signup')
        }
        return bcrypt
        .hash(password , 12)
        .then (hashedpassword => {
            const user = new User ({
                email : email,
                password : hashedpassword,
                cart : {
                    items : []
                }
            })
         return user.save();
        })
    }).then(result => {
        res.redirect('/login')
    })
    .catch(error => console.log(error))

}


exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    })
}
exports.getReset = (req, res, next) => {
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    
   res.render('auth/reset',{
    path: '/reset',
    pageTitle: 'Password Reset',
    errorMessage: message
   })
}

exports.postReset = (req, res, next ) => {
    crypto.randomBytes(32,(error , buffer) => {
        if(error) {
            console.log(error);
            return res.redirect('/reset')
        }
        const token =buffer.toString('hex')
        User.findOne({email : req.body.email})
            .then(user => {
                if(!user){
                    req.flash('error', 'no account with that email found')
                    return res.redirect('/reset');
                }
                user.resetToken = token;
                user.resetTokenExpiration = Date.now() + 3600000;
                return user.save()
            })
            // .then(result => {
            //     transporter.sendMail({
            //         to: req.body.email,
            //         from : 'hello@aeeron.in',
            //         subject : 'Password Reset',
            //         html : `
            //         <p> You requested a password </p>
            //         <p>Click this<a href ="http://localhost:5000/reset/${token}">Link</a> to set a new password.</p>`
            //     })
            // })
            .catch(error => console.log(error))
    })
}