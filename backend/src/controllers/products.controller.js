const { productsService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getProducts = async (_req, res) => {
  const { status, data } = await productsService.getProducts();
  return res.status(mapStatusHTTP(status)).json(data);
};

const getProductByID = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productsService.getProductByID(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const addProduct = async (req, res) => {
  const newProduct = req.body;
  if (!newProduct.name) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({
      message: '"name" is required',
    });
  }
  const { status, data } = await productsService.addProduct(newProduct);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  getProducts,
  getProductByID,
  addProduct,
};