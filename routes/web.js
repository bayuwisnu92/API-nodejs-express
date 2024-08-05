const express = require('express')
const home = require('../controllers/controllerWeb')
const routerWeb = express.Router()

routerWeb.get('/',home)

module.exports = routerWeb