let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let expect = chai.expect;
let should = chai.should;

let server = require('../../loader.js');
let token = require('./token');

describe('Test History CRUD is Working', function (done) {
    let history;
    it('should get an array of errors for blank fields', function (done) {
        let { MESSAGE_FILE } = require('../../config/config');
        let msg = require('../../config/messages/' + MESSAGE_FILE).history;
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/history')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                content: '',
                years: [
                    {
                        year: '',
                        content: '',
                    },
                ]
            })
            .end(function (err, res) {
                console.log(res.body);
                expect(res.status).to.eql(406);
                expect(res.body.code).to.eql(406);
                expect(res.body.errors.content.msg).to.be.eql(msg.blank_history_content);
                // expect(res.body.history).to.not.be.null;
                done();
            });
    });

    it('should create a history', function (done) {
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/history')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                content: 'Vários texto tralala e é assim que aconteceu',
                years: [
                    {
                        year: '1945',
                        content: 'Vários texto tralala e é assim que aconteceu, bomba atômica',
                    },
                ]
            })
            .end(function (err, res) {
                expect(res.status).to.eql(201);
                expect(res.body.code).to.eql(201);
                expect(res.body.history).to.not.be.null;
                console.log(res.body);
                history = res.body.history;
                done();
            });
    });

    it('should get an array of histories and their images', function (done) {
        this.timeout(200000);
        chai.request(server)
            .get(`/api/v1/history`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.histories).to.not.be.null;
                expect(res.body.histories).to.be.an('array');

                done();
            });
    });

    it('should get a history', function (done) {
        this.timeout(200000);
        chai.request(server)
            .get(`/api/v1/history/${history._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.history).to.not.be.null;

                done();
            });
    });

    it('should update a history', function (done) {
        this.timeout(200000);
        chai.request(server)
            .put('/api/v1/history')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                ...history,
                content: 'Vários texto tralala e é assim que aconteceu naquele dia'
            })
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.history).to.not.be.null;

                expect(res.body.history.content).to.eql('Vários texto tralala e é assim que aconteceu naquele dia');
                done();
            });
    });

    /* it('should delete a history', function (done) {
        this.timeout(200000);
        chai.request(server)
            .delete(`/api/v1/history/${history._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);

                done();
            });
    }); */

    /* it('should delete all histories', function (done) {
        chai.request(server)
            .get(`/api/v1/history`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.histories).to.not.be.null;
                expect(res.body.histories).to.be.an('array');
                res.body.histories.forEach(element => {
                    //console.log(element);
                    chai.request(server)
                        .delete(`/api/v1/history/${element._id}`)
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