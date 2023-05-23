const getDb = require('../util/database');
const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectId;

class User {
    constructor(username , email){
        this.name = username;
        this.email = email;
    }
    save () {
        const db = getDb();
        return db.collection('users').insertOne(this);

    }
    static findById(userId){
        const db = getDb();
        return db.collection('users')
        .findOne({id:ObjectId(userid)})
        .then(user => {
            console.log(user);
            return user;
        })
    }
}
module.exports = User;