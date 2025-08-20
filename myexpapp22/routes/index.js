var express = require('express');
var ProductModel = require('../models/Product');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add-product', function(req, res, next) {
  res.render('add-product');
});

router.post('/add-product-process', function(req, res, next) {
  var mydata = {
    pname : req.body.txt1,
    pdetails : req.body.txt2,
    pprice : req.body.txt3,
  }
  var ProductData = ProductModel(mydata)
  ProductData.save()
  .then(()=>{
    res.send("Data Added")
  })
  .catch((err) => console.log("Error in adding data " + err))

});

router.get('/display-product', function(req, res, next) {
  ProductModel.find()
  .then((mydata)=>{
    console.log(mydata)
    res.render('display-product',{mydata:mydata})
  })
  .catch((err)=>console.log(err))
});

router.get('/delete-product/:id', function(req, res, next) {

  var myid = req.params.id
  ProductModel.findByIdAndDelete(myid)
  .then((mydata)=>{
    res.redirect('display-product',{mydata:mydata})
  })
  .catch((err)=>console.log(err))
});





module.exports = router;
