var express = require('express')
var router = express.Router()
var pool = require('../utility/database.js');

router.get('/categories', async function (req, res) {
  let categories = await pool.query('SELECT * FROM category');
  console.log('categories', categories);
  res.send({categories: categories.rows});
})

module.exports = router;
