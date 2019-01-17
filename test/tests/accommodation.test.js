let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let expect = chai.expect;
let should = chai.should;

let server = require('../../loader.js');
let token = require('./token');
describe('Test Accomodation CRUD is Working', function (done) {
    let accomodation;
    it('should test validation problems', function (done) {
        let {MESSAGE_FILE} = require('../../config/config');
        let msg = require('../../config/messages/' + MESSAGE_FILE).accomodation;
        chai.request(server)
            .post('/api/v1/accomodation')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                name: '',
                img: '',
                type: '',
                vacancies: '',
                location: '',
                structure: '',
                extras: '',
                contact: '',
                price: '',
            })
            .end(function (err, res) {
                console.log(res.body);
                expect(res.status).to.eql(406);
                expect(res.body.code).to.eql(406);
                expect(res.body.errors.name.msg).to.be.eql(msg.blank_accomodation_name);
                expect(res.body.accomodation).to.not.be.null;
                done();
            });
    });

    it('should create a few accomodations', function (done) {
        chai.request(server)
            .post('/api/v1/accomodation')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                name: 'REPÚBLICA 5BOLA',
                img: 'https://www.carnailha.com.br/resources/img/promoters/Campo%20Grande.jpg',
                type: 'Mista',
                vacancies: '50 Vagas',
                location: 'Rua Rochedos, 125',
                structure: 'Quartos com ar condicionado e espaço para barracas.',
                extras: 'Segurança durante 5 dias; Festa Oficial do Circuito de Festas - V Folia Sunset; Funcionária 2 dias; Kit com Colete Oficial CincoBola; Open Barde Cerveja.',
                contact: 'Caio Eduardo-Humilda (18) 99645-7794 Rodrigo Segamarchi-Murruga(14) 99866-302',
                price: '52,00',
            })
            .end(function (err, res) {
                expect(res.status).to.eql(201);
                expect(res.body.code).to.eql(201);
                expect(res.body.accomodation).to.not.be.null;

                accomodation = res.body.accomodation;
                done();
            });
    });

    it('should get an array of accomodations', function (done) {
        chai.request(server)
            .get(`/api/v1/accomodation`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.accomodations).to.not.be.null;
                expect(res.body.accomodations).to.be.an('array');

                done();
            });
    });

    it('should get an accomodation', function (done) {
        chai.request(server)
            .get(`/api/v1/accomodation/${accomodation._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.accomodation).to.not.be.null;

                done();
            });
    });

    it('should update an accomodation', function (done) {
        chai.request(server)
            .put('/api/v1/accomodation')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                ...accomodation,
                name: 'Arroz doce!'
            })
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.accomodation).to.not.be.null;

                expect(res.body.accomodation.name).to.eql('Arroz doce!');
                expect(res.body.accomodation.updated_at).to.not.be.null;
                done();
            });
    });

    it('should delete the last accomodation', function (done) {
        chai.request(server)
            .delete(`/api/v1/accomodation/${accomodation._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);

                done();
            });
    });

    /* it('should clean all accomodations', function (done) {
        chai.request(server)
            .get(`/api/v1/accomodation`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.accomodations).to.not.be.null;
                expect(res.body.accomodations).to.be.an('array');
                res.body.accomodations.forEach(element => {
                    //console.log(element);
                    chai.request(server)
                        .delete(`/api/v1/accomodation/${element._id}`)
                        .set('authorization', `Bearer ${token.get().accessToken}`)
                        .end(function (err, res) {
                            expect(res.status).to.eql(200);
                            expect(res.body.code).to.eql(200);
                        });
                });
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);

                done();
            });
    }); */
});