let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let expect = chai.expect;
let should = chai.should;

let server = require('../../loader.js');
let token = require('./token');
describe('Test Settings is Working', function (done) {
    let setting;
    this.timeout(200000);
    it('should test validation problems', function (done) {
        let { MESSAGE_FILE } = require('../../config/config');
        let msg = require('../../config/messages/' + MESSAGE_FILE).setting;
        chai.request(server)
            .post('/api/v1/setting')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                year: '',
                ini: '',
                end: '',
                medias: {
                    wpp: '',
                    face: '',
                    insta: ''
                },
                img: '',
                map: '',
                palette: {
                }
            })
            .end(function (err, res) {
                console.log(res.body);
                expect(res.status).to.eql(406);
                expect(res.body.code).to.eql(406);
                expect(res.body.errors.year.msg).to.be.eql(msg.blank_year);
                expect(res.body.errors.img.msg).to.be.eql(msg.blank_img);
                expect(res.body.setting).to.not.be.null;
                done();
            });
    });

    it('should add a setting', function (done) {
        chai.request(server)
            .post('/api/v1/setting')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                year: 2019,
                ini: '2019-03-19',
                end: '2019-03-25',
                medias: {
                    wpp: ' ',
                    face: 'https://www.facebook.com/events/885384528315484/',
                    insta: 'https://www.instagram.com/carnailha/'
                },
                img: 'https://carnailha.com.br/resources/img/bg-01.jpg',
                map: '<iframe src="https://www.google.com/maps/d/embed?mid=1SuoJitGi0-wggKLPqYtGHobmnnmywLPO" width="640" height="480"></iframe>',
                palette: {
                    banner: '#c9c9c9',
                    background: '#c9c9c9'
                }
            })
            .end(function (err, res) {
                expect(res.status).to.eql(201);
                expect(res.body.code).to.eql(201);
                expect(res.body.setting).to.not.be.null;

                setting = res.body.setting;
                done();
            });
    });

    it('should get an array of settings', function (done) {
        chai.request(server)
            .get(`/api/v1/setting`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.settings).to.not.be.null;
                expect(res.body.settings).to.be.an('array');

                done();
            });
    });

    it('should get a setting', function (done) {
        chai.request(server)
            .get(`/api/v1/setting/${setting._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.setting).to.not.be.null;

                done();
            });
    });

    it('should update a setting', function (done) {
        chai.request(server)
            .put('/api/v1/setting')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                ...setting,
                year: 2020
            })
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.setting).to.not.be.null;

                expect(res.body.setting.year).to.eql(2020);
                expect(res.body.setting.updated_at).to.not.be.null;
                done();
            });
    });

    it('should delete the a setting', function (done) {
        chai.request(server)
            .delete(`/api/v1/setting/${setting._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);

                done();
            });
    });
});