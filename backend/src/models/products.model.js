const connection = require('./connection');
const { formatPlaceholder, formatColumns } = require('../utils/formatQuery');

const getProducts = async () => {
    const [products] = await connection.execute('SELECT * FROM products');
    return products;
};

const getProductByID = async (id) => {
    const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
    return product;
};

const addProduct = async (product) => {
    const collumns = formatColumns(product);
    const placeholders = formatPlaceholder(product);
    const values = Object.values(product);
    const query = `INSERT INTO products (${collumns}) VALUES (${placeholders})`;
    const [{ insertId }] = await connection.execute(query, values);
    return insertId;
};

module.exports = {
    getProducts,
    getProductByID,
    addProduct,
};