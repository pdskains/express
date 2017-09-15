const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('./server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Routes', () => {
  describe('/', () => {
    describe('GET', () => {
      it('response of 200 is successful', (done) => {
        chai.request(server)
          .get('/')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
          });
      });
    });
  });
  describe('/netflixOriginals', () => {
    it('response of 200 is successful', (done) => {
      chai.request(server)
        .get('/netflixOriginals')
        .end((error, response) => {
          expect(error).to.be.null;
          expect(response).to.have.status(200);
          done();
        });
    });
  });
  describe('/books', () => {
    it('response of 200 is successful', (done) => {
      chai.request(server)
        .get('/books')
        .end((error, response) => {
          expect(error).to.be.null;
          expect(response).to.have.status(200);
          done();
        });
    });
  });
});
