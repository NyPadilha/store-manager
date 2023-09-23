const route = require('express').Router();
const { salesController } = require('../controllers');
const { salesValidation } = require('../middlewares/sales.validation');

route.get('/', salesController.getSales);
route.get('/:id', salesController.getSaleByID);
route.post('/', salesValidation, salesController.addSale);

module.exports = route;