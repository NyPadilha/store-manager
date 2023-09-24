const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const { allSales, saleByID, saleByIDArray, expectedInsertId } = require('../../mocks/sales.model.mock');

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
        sinon.stub(connection, 'execute').resolves([expectedInsertId]);

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
        const sale = await salesModel.addSale(inputData);

        expect(sale).to.be.an('object');
        expect(sale.itemsSold).to.equal(inputData);
        // console.log(sale); // id ta vindo como undefined
    });

    afterEach(function () {
        sinon.restore();
    });
});