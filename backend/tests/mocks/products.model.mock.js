const allProducts = [
    { id: 1, name: 'Martelo de Thor' },
    { id: 2, name: 'Traje de encolhimento' },
    { id: 3, name: 'Escudo do Capitão América' },
];

const productByID = {
  id: 3,
  name: 'Escudo do Capitão América',
};

const insertId = {
  insertId: 76,
};

const expectedInsertId = 76;

const allProductsController = { status: 'SUCCESSFUL', data: allProducts };

const productByIDController = { status: 'SUCCESSFUL', data: productByID };

module.exports = {
  allProducts,
  productByID,
  insertId,
  expectedInsertId,
  allProductsController,
  productByIDController,
};