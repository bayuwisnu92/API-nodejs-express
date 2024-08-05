const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');

// Gunakan express-ejs-layouts middleware
app.use(expressLayouts);


const home = app.get('/', (req, res) => {
    res.render('index', {
      title: 'web api',
      layout: 'layouts/main'
    });
  });

  module.exports = home