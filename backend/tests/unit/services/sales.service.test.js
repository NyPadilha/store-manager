const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { allSales, saleByID, expectedInsertId } = require('../../mocks/sales.model.mock');

describe('Sales service test', function () {
    it('Should get all sales', async function () {
        sinon.stub(salesModel, 'getSales').resolves(allSales);

        const serviceResponse = await salesService.getSales();

        expect(serviceResponse.status).to.equal('SUCCESSFUL');
        expect(serviceResponse.data).to.be.deep.equal(allSales);
    });
    it('Return SUCCESSFUL when get sale by id', async function () {
        sinon.stub(salesModel, 'getSaleByID').resolves(saleByID);
    
        const inputData = 2;
        const serviceResponse = await salesService.getSaleByID(inputData);
    
        expect(serviceResponse.status).to.equal('SUCCESSFUL');
        expect(serviceResponse.data).to.be.deep.equal(saleByID);
    });
    it('Return CREATED when create a sale', async function () {
        sinon.stub(salesModel, 'addSale').resolves(expectedInsertId);

        const inputData = [
            {
                productId: 1,
                quantity: 1,
            },
            {
                productId: 2,
                quantity: 2,
            },
        ];
        const serviceResponse = await salesService.addSale(inputData);

        expect(serviceResponse.status).to.equal('CREATED');
        expect(serviceResponse.data).to.be.deep.equal(expectedInsertId);
    });
    it('Return NOT_FOUND when doesnt found the Product', async function () {
        const inputData = [
            {
                productId: 99,
                quantity: 1,
            },
            {
                productId: 2,
                quantity: 2,
            },
        ];

        const serviceResponse = await salesService.addSale(inputData);

        expect(serviceResponse.status).to.equal('NOT_FOUND');
        expect(serviceResponse.data).to.be.deep.equal({ message: 'Product not found' });
    });
    it('Return INVALID_VALUE when invalid value', async function () {
        const inputData = [
            {
                productId: 1,
                quantity: 0,
            },
            {
                productId: 2,
                quantity: 2,
            },
        ];

        const serviceResponse = await salesService.addSale(inputData);

        expect(serviceResponse.status).to.equal('INVALID_VALUE');
        expect(serviceResponse.data).to.be.deep.equal({ message: '"quantity" must be greater than or equal to 1' });
    });

    afterEach(function () {
        sinon.restore();
    });
});