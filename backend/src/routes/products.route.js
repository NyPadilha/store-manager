const route = require('express').Router();
const { productsController } = require('../controllers');

route.get('/', productsController.getProducts);
route.get('/:id', productsController.getProductByID);
route.post('/', productsController.addProduct);

module.exports = route;
