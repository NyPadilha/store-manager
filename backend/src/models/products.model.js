const connection = require('./connection');
const { formatPlaceholder, formatColumns, formatUpdate } = require('../utils/formatQuery');

const getProducts = async () => {
    const [products] = await connection.execute('SELECT * FROM products');
    return products;
};

const getProductByID = async (id) => {
    const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
    return product;
};

const addProduct = async (product) => {
    const columns = formatColumns(product);
    const placeholders = formatPlaceholder(product);
    const values = Object.values(product);
    const query = `INSERT INTO products (${columns}) VALUES (${placeholders})`;
    const [{ insertId }] = await connection.execute(query, values);
    return insertId;
};

const updateProduct = async (id, product) => {
    const columns = formatUpdate(product);
    const values = [...Object.values(product), id];
    return connection.execute(`UPDATE products SET ${columns} WHERE id = ?`, values);
};

module.exports = {
    getProducts,
    getProductByID,
    addProduct,
    updateProduct,
};