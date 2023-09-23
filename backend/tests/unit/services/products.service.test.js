const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');
const { allProducts, productByID, insertId, expectedInsertId } = require('../../mocks/products.model.mock');

describe('Products service test', function () {
    it('Should get all products', async function () {
        sinon.stub(productsModel, 'getProducts').resolves(allProducts);

        const serviceResponse = await productsService.getProducts();

        expect(serviceResponse.status).to.equal('SUCCESSFUL');
        expect(serviceResponse.data).to.have.deep.members(allProducts);
    });
    it('Return SUCCESSFUL when get product by id', async function () {
        sinon.stub(productsModel, 'getProductByID').resolves(productByID);
    
        const inputData = 3;
        const serviceResponse = await productsService.getProductByID(inputData);
    
        expect(serviceResponse.status).to.equal('SUCCESSFUL');
        expect(serviceResponse.data).to.be.deep.equal(productByID);
    });
    it('Return NOT_FOUND when doesnt get any product', async function () {
        sinon.stub(productsModel, 'getProducts').resolves([]);
    
        const serviceResponse = await productsService.getProducts();
    
        expect(serviceResponse.status).to.equal('NOT_FOUND');
        expect(serviceResponse.data).to.be.deep.equal({ message: 'There are no products' });
    });
    it('Return NOT_FOUND when doesnt get product by id', async function () {
        sinon.stub(productsModel, 'getProductByID').resolves(undefined);

        const inputData = 9;
        const serviceResponse = await productsService.getProductByID(inputData);

        expect(serviceResponse.status).to.equal('NOT_FOUND');
        expect(serviceResponse.data).to.be.deep.equal({ message: 'Product not found' });
    });
    it('Return CREATED when create a product', async function () {
        sinon.stub(productsModel, 'addProduct').resolves(insertId);
        sinon.stub(productsModel, 'getProductByID').resolves(expectedInsertId);

        const inputData = { name: 'Jaguara' };
        const serviceResponse = await productsService.addProduct(inputData);

        expect(serviceResponse.status).to.equal('CREATED');
        expect(serviceResponse.data).to.be.deep.equal(expectedInsertId);
    });
    it('Test Joi validation when create a product', async function () {
        const inputData = { name: 'Jaka' };

        const serviceResponse = await productsService.addProduct(inputData);

        expect(serviceResponse.status).to.equal('INVALID_VALUE');
        expect(serviceResponse.data).to.be.deep.equal({ message: '"name" length must be at least 5 characters long' });
    });

    afterEach(function () {
        sinon.restore();
    });
});