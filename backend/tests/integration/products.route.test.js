const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);

const { request, expect } = chai;

describe('/products', function () {
    it('Should get all Products', function (done) {
        request(app)
            .get('/products')
            .end((err, res) => {
                if (err) return done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });
});