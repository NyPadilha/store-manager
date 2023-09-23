const { productsModel } = require('../models');

const getProducts = async () => {
    const products = await productsModel.getProducts();

    if (products.length < 1) {
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

const addProduct = async (product) => {
    if (product.name.length < 5) {
        return {
            status: 'INVALID_VALUE',
            data: {
                message: '"name" length must be at least 5 characters long',
            },
        };
    }
    const insertProduct = await productsModel.addProduct(product);
    const getNewProduct = await productsModel.getProductByID(insertProduct);
    return { status: 'CREATED', data: getNewProduct };
};

module.exports = {
    getProducts,
    getProductByID,
    addProduct,
};
