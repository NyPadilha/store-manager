const route = require('express').Router();
const { salesController } = require('../controllers');

route.get('/', salesController.getSales);
route.get('/:id', salesController.getSaleByID);

module.exports = route;