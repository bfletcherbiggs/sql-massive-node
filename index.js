var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var productsCtrl = require('./productsCtrl.js');

app.use(bodyParser.json());
app.use(cors());

app.get('/api/products', productsCtrl.GetAll)
app.get('/api/product/:productId', productsCtrl.GetOne)
app.post('/api/product', productsCtrl.Create)
app.put('/api/product/:productId',productsCtrl.Update)
app.delete('/api/product/:productId', productsCtrl.Delete)


app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})
