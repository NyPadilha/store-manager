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

const newProduct = {
  id: 4,
  name: 'JaguaraJR',
};

const addProductController = { status: 'CREATED', data: newProduct };

const updateProduct = {
  id: 2,
  name: 'Martelo do cARLOS',
};

const updateProductController = { status: 'SUCCESSFUL', data: updateProduct };

module.exports = {
  allProducts,
  productByID,
  insertId,
  expectedInsertId,
  allProductsController,
  productByIDController,
  newProduct,
  addProductController,
  updateProduct,
  updateProductController,
};