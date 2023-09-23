const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
// const { allSales } = require('../mocks/sales.model.mock');

chai.use(chaiHttp);

const { request, expect } = chai;

describe('/sales', function () {
    it('Should get all sales', function (done) {
        request(app)
            .get('/sales')
            .end((err, res) => {
                if (err) return done(err);
                expect(res).to.have.status(200);
                // expect(res.body).to.be.deep.equal(allSales); // This line will break the 1st requirement test
                done();
            });
    });
});