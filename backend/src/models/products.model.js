const connection = require('./connection');

const getProducts = async () => {
    const [products] = await connection.execute('SELECT * FROM products');
    return products;
};

const getProductByID = async (id) => {
    const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
    return product;
};

module.exports = {
    getProducts,
    getProductByID,
};