const { salesModel } = require('../models');

const getSales = async () => {
    const sales = await salesModel.getSales();
    return { status: 'SUCCESSFUL', data: sales };
};

const getSaleByID = async (saleId) => {
    const sale = await salesModel.getSaleByID(saleId);

    if (sale.length < 1) {
        return { 
            status: 'NOT_FOUND', 
            data: { 
                message: 'Sale not found',
            },
        };
    }
    return { status: 'SUCCESSFUL', data: sale };
};

module.exports = {
    getSales,
    getSaleByID,
};