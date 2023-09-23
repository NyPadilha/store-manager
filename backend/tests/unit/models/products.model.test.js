const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');
const { allProducts, productByID, insertId, expectedInsertId } = require('../../mocks/products.model.mock');

describe('Products model test', function () {
    it('Should get all products', async function () {
        sinon.stub(connection, 'execute').resolves([allProducts]);

        const products = await productsModel.getProducts();

        expect(products).to.be.an('array');
        expect(products).to.have.deep.members(allProducts);
    });
    it('Should get a product by the id', async function () {
        sinon.stub(connection, 'execute').resolves([[productByID]]);

        const inputData = 3;
        const product = await productsModel.getProductByID(inputData);

        expect(product).to.be.an('object');
        expect(product).to.deep.equal(productByID);
    });
    it('Should create a product', async function () {
        sinon.stub(connection, 'execute').resolves([insertId]);

        const inputData = { name: 'Jaguara' };
        const product = await productsModel.addProduct(inputData);

        expect(product).to.be.a('number');
        expect(product).to.equal(expectedInsertId);
    });

    afterEach(function () {
        sinon.restore();
    });
});