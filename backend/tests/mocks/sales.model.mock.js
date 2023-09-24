const date = '2023-09-23T17:53:42.000Z';

const allSales = [
    {
      date,
      saleId: 1,
      productId: 1,
      quantity: 5,
    },
    {
      date,
      saleId: 1,
      productId: 2,
      quantity: 10,
    },
    {
      date,
      saleId: 2,
      productId: 3,
      quantity: 15,
    },
];

const saleByID = {
    date,
    saleId: 2,
    productId: 3,
    quantity: 15,
};

const saleByIDArray = [saleByID];

const insertId = {
    insertId: 76,
};

const expectedInsertId = {
    id: 3,
    itemsSold: [
        {
            productId: 1,
            quantity: 1,
        },
        {
            productId: 2,
            quantity: 2,
        },
    ],
};

module.exports = {
    allSales,
    saleByID,
    saleByIDArray,
    insertId,
    expectedInsertId,
};