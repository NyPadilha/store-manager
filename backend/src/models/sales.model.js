const camelize = require('camelize');
const connection = require('./connection');
const { formatPlaceholder, formatColumns } = require('../utils/formatQuery');

const getSales = async () => {
    const [sales] = await connection.execute(
        `SELECT s.date, sp.sale_id, sp.product_id, sp.quantity 
        FROM sales AS s
        INNER JOIN sales_products AS sp
        ON s.id = sp.sale_id
        ORDER BY sp.sale_id, sp.product_id;`,
    );
    
    return camelize(sales);
};

const getSaleByID = async (saleId) => {
    const [sale] = await connection.execute(
        `SELECT s.date, sp.product_id, sp.quantity 
        FROM sales AS s
        INNER JOIN sales_products AS sp
        ON s.id = sp.sale_id
        WHERE s.id = ?
        ORDER BY sp.sale_id, sp.product_id;`,
        [saleId],
    );
    return camelize(sale);
};

const addSaleProducts = async (saleId, sale) => {
    const columns = formatColumns(sale[0]);
    const placeholders = sale.map((sl) => `(?, ${formatPlaceholder(sl)})`).join(', ');
    const values = sale.flatMap((sl) => [saleId, ...Object.values(sl)]);
    // const query = `INSERT INTO sales_products (sale_id, ?) VALUES ?;`, [columns, placeholders];
    const query = `INSERT INTO sales_products (sale_id, ${columns}) VALUES ${placeholders};`;

    return connection.execute(query, values);
};

const addSale = async (sale) => {
    const [{ insertId }] = await connection.execute('INSERT INTO sales () VALUES ();', []);
    await addSaleProducts(insertId, sale);
    const newSale = {
        id: insertId,
        itemsSold: sale,
    };

    return newSale;
};

module.exports = {
    getSales,
    getSaleByID,
    addSale,
};