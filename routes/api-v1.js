var express = require('express')
var router = express.Router()
var pool = require('../utility/database.js');

router.get('/categories', async function (req, res) {
  let categories = await pool.query('SELECT * FROM category');
  console.log('categories', categories);
  res.send({categories: categories.rows});
})

router.get('/category/details', async function(req, res){
  let str = req.query.linkto;
  if(!str){return res.status(400).send({message: 'Unrecognized category queried'})}
  let category = await pool.query(`SELECT * FROM category WHERE LINKTO = '${str}'`);
  if(category.rows&&category.rows.length == 1){
    return res.send({category: category.rows[0]})
  }else if(category.rows && category.rows.length>1){
    return res.status(500).send({message: "More than one match for this category found. Please report this bug to the system administrator!"})
  }else{
    return res.status(500).send({message: "This category doesn't appear to exist."})
  }
});

//router.get('/category/products', async function(req, res){});

//router.get('/category/product/:id', async function(req, res){});

module.exports = router;
