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

module.exports = {
    getProducts,
    getProductByID,
};