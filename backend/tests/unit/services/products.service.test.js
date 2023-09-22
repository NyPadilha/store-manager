const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');
const { allProducts, productByID } = require('../../mocks/products.model.mock');

describe('Products model test', function () {
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
    afterEach(function () {
        sinon.restore();
    });
});