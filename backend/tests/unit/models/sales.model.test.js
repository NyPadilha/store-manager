const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const { allSales, saleByID, saleByIDArray } = require('../../mocks/sales.model.mock');

describe('Sales model test', function () {
    it('Should get all sales', async function () {
        sinon.stub(connection, 'execute').resolves([allSales]);

        const sales = await salesModel.getSales();

        expect(sales).to.be.an('array');
        expect(sales).to.have.deep.members(allSales);
    });
    it('Should get a sales by the id', async function () {
        sinon.stub(connection, 'execute').resolves([[saleByID]]);

        const inputData = 2;
        const product = await salesModel.getSaleByID(inputData);

        expect(product).to.be.an('array');
        expect(product).to.deep.equal(saleByIDArray);
    });
    it('Should create a sale', async function () {
        // test
    });

    afterEach(function () {
        sinon.restore();
    });
});