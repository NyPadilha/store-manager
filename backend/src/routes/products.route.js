const route = require('express').Router();
const { productsController } = require('../controllers');
const { productValidation } = require('../middlewares/product.validation');

route.get('/', productsController.getProducts);
route.get('/:id', productsController.getProductByID);
route.post('/', productsController.addProduct);
route.put('/:id', productValidation, productsController.updateProduct);

module.exports = route;
