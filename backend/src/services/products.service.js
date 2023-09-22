const { productsModel } = require('../models');

const getProducts = async () => {
    const products = await productsModel.getProducts();

    if (!products) {
        return {
            status: 'NOT_FOUND',
            data: {
                message: 'There are no products',
            },
        };
    }
    return { status: 'SUCCESSFUL', data: products };
};

const getProductByID = async (id) => {
    const product = await productsModel.getProductByID(id);

    if (!product) {
        return {
            status: 'NOT_FOUND',
            data: {
                message: 'Product not found',
            },
        };
    }
    return { status: 'SUCCESSFUL', data: product };
};

module.exports = {
    getProducts,
    getProductByID,
};
