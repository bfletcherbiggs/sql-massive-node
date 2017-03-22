var db = require('./db.js')

module.exports={
  Create : function(req,res){
    let pName = req.body.name
    let pDesc = req.body.description
    let pPrice = req.body.price
    let pUrl = req.body.imageurl

      db.create_product([pName,pDesc,pPrice,pUrl],function(err, product){
        err ? res.status(500).json(err):res.status(200).json(product);
      })
  },
  GetOne : function(req,res){
  let productId = req.params.productId
    db.read_product([productId],function(err, product){
      err ? res.status(500).json(err):res.status(200).json(product);
    })
  },
  GetAll : function(req,res){
      db.read_products(function(err, products){
        err ? res.status(500).json(err):res.status(200).json(products);
      })
  },
  Update : function(req,res){
    let productId = req.params.productId
    let pName = req.query.name
    let pDesc = req.query.description
    let pPrice = Number(req.query.price)
    let pUrl = req.query.imageurl

      db.update_product([productId,pPrice],function(err, product){
        err ? res.status(500).json(err):res.status(200).json(product);
      })
  },
  Delete : function(req,res){
    let productId = req.params.productId

      db.delete_product([productId],function(err, product){
        err ? res.status(500).json(err):res.status(200).json(product);
      })
  }
}
