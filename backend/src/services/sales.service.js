const { salesModel, productsModel } = require('../models');
const { salesSchema } = require('./validations/schemas');

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

const addSale = async (sale) => {
    const { error } = salesSchema.validate(sale);
    if (error) {
        return { 
            status: 'INVALID_VALUE', 
            data: { message: '"quantity" must be greater than or equal to 1' },
        };
    }
    const inexistentProduct = sale.map(({ productId }) => productsModel.getProductByID(productId));
    const products = await Promise.all(inexistentProduct);
    if (products.includes(undefined)) {
        return {
            status: 'NOT_FOUND',
            data: { message: 'Product not found' },
        };
    }
    const newSale = await salesModel.addSale(sale);
    return { status: 'CREATED', data: newSale };
};

module.exports = {
    getSales,
    getSaleByID,
    addSale,
};