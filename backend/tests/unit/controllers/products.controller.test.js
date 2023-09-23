const { expect, use } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { allProducts, productByID, allProductsController, productByIDController } = require('../../mocks/products.model.mock');

use(sinonChai);

describe('Products controller test', function () {
    let res;
    beforeEach(function () {
        res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
    });
    afterEach(function () {
        sinon.restore();
    });

    it('Should get all products', async function () {
        sinon.stub(productsService, 'getProducts').resolves(allProductsController);

        await productsController.getProducts(null, res);

        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(allProducts);
    });
    it('Should get a product by the id', async function () {
        sinon.stub(productsService, 'getProductByID').resolves(productByIDController);

        const req = {
            params: { id: 3 },
        };
        await productsController.getProductByID(req, res);

        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(productByID);
    });
});