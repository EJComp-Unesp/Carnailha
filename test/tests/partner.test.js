let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let expect = chai.expect;
let should = chai.should;

let server = require('../../loader.js');
let token = require('./token');
describe('Test Partners CRUD is Working', function (done) {
    let partner;
    it('should test validation problems', function (done) {
        let {MESSAGE_FILE} = require('../../config/config');
        let msg = require('../../config/messages/' + MESSAGE_FILE).partner;
        chai.request(server)
            .post('/api/v1/partner')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                name: '',
                description: '',
                link: '',
                img: '',
            })
            .end(function (err, res) {
                console.log(res.body);
                expect(res.status).to.eql(406);
                expect(res.body.code).to.eql(406);
                expect(res.body.errors.name.msg).to.be.eql(msg.blank_partner_name);
                expect(res.body.errors.img.msg).to.be.eql(msg.no_partner_img);
                expect(res.body.partner).to.not.be.null;
                done();
            });
    });

    it('should add a partner', function (done) {
        chai.request(server)
            .post('/api/v1/partner')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                name: 'Guni',
                description: 'Guni eventos e etc.',
                link: 'https://www.guni.com.br/',
                img: 'https://carnailha.com.br/resources/img/bg-01.jpg',
            })
            .end(function (err, res) {
                expect(res.status).to.eql(201);
                expect(res.body.code).to.eql(201);
                expect(res.body.partner).to.not.be.null;

                partner = res.body.partner;
                done();
            });
    });

    it('should get an array of partners', function (done) {
        chai.request(server)
            .get(`/api/v1/partner`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.partners).to.not.be.null;
                expect(res.body.partners).to.be.an('array');

                done();
            });
    });

    it('should get a partner', function (done) {
        chai.request(server)
            .get(`/api/v1/partner/${partner._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.partner).to.not.be.null;

                done();
            });
    });

    it('should update a partner', function (done) {
        chai.request(server)
            .put('/api/v1/partner')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                ...partner,
                name: 'Catiorro'
            })
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.partner).to.not.be.null;

                expect(res.body.partner.name).to.eql('Catiorro');
                expect(res.body.partner.updated_at).to.not.be.null;
                done();
            });
    });

    it('should delete the a partner', function (done) {
        chai.request(server)
            .delete(`/api/v1/partner/${partner._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);

                done();
            });
    });

    /* it('should delete all partner', function (done) {
        chai.request(server)
            .get(`/api/v1/partner`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.partners).to.not.be.null;
                expect(res.body.partners).to.be.an('array');
                res.body.partners.forEach(element => {
                    //console.log(element);
                    chai.request(server)
                        .delete(`/api/v1/partner/${element._id}`)
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
    });  */
});