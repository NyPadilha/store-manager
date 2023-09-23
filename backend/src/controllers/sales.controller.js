const { salesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getSales = async (_req, res) => {
    const { status, data } = await salesService.getSales();
    return res.status(mapStatusHTTP(status)).json(data);
};

const getSaleByID = async (req, res) => {
    const { id } = req.params;
    const { status, data } = await salesService.getSaleByID(id);
    return res.status(mapStatusHTTP(status)).json(data);
};

const addSale = async (req, res) => {
    const { body } = req;
    const { status, data } = await salesService.addSale(body);
    return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
    getSales,
    getSaleByID,
    addSale,
};