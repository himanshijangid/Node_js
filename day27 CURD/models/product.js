const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

class Product {
  constructor(title,price,description , imageUrl,id){
    this.title = title,
    this.price = price,
    this.description = description,
    this.imageUrl = imageUrl,
    this._id = id? new mongodb.ObjectId(id):null;
  }
save(){
  const db = getDb();
  let dbOp;
  if(this._id){
    dbOp = db
    .collection('products')
    .updateOne({_id : new mongodb.ObjectId(this._id)} ,{$set:this})
  }else{
    dbOp = db.collection('products').insertOne(this);
  }
  return dbOp
  .then(result => {

  }).catch (error => console.log(error));
}


   static fetchAll(){
    const db = getDb();
    return db.collection('products')
    .find()
    .toArray()
    .then(products => {
      return products;
    })
    .catch(error => console.log(error))
   }

   static findById(prodId){
    const db = getDb();
    return db
    .collection('products')
    .find({_id:new mongodb.ObjectId(prodId)})
    .next()
    .then(product => {
      return product;

    })
    .catch(error => console.log(error));
   }


   static deleteById(prodId) {
    const db = getDb();
    return db
      .collection('products')
      .deleteOne({ _id: new mongodb.ObjectId(prodId) })
      .then(result => {
        console.log("Deleted");
      })
      .catch(err => console.log(err));
  }
}
module.exports = Product;