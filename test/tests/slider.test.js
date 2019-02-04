let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let expect = chai.expect;
let should = chai.should;

let server = require('../../loader.js');
let token = require('./token');

describe('Test Slider CRUD is Working', function (done) {
    let slider;
    it('should get an array of errors for blank fields', function (done) {
        let { MESSAGE_FILE } = require('../../config/config');
        let msg = require('../../config/messages/' + MESSAGE_FILE).slider;
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/slider')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                active_amount: '',
                slides: [
                    {
                        title: '',
                        description: '',
                        img: '',
                        link: '',
                    },
                    {
                        name: '',
                        description: '',
                        img: '',
                        link: '',
                    }
                ]
            })
            .end(function (err, res) {
                console.log(res.body);
                expect(res.status).to.eql(406);
                expect(res.body.code).to.eql(406);
                expect(res.body.errors.active_amount.msg).to.be.eql(msg.invalid_active_amount);
                expect(res.body.errors['slides[0].img'].msg).to.be.eql(msg.blank_slide_img);

                // expect(res.body.slider).to.not.be.null;

                done();
            });
    });

    it('should create a slider', function (done) {
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/slider')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                active_amount: 1,
                slides: [
                    {
                        title: 'Super festa amnhã',
                        description: 'Louco louco',
                        img: 'https://www.carnailha.com.br/resources/img/superbatera.png',
                        link: 'https://www.carnailha.com.br/',
                    },
                    {
                        title: 'Super festa amnhã 2.0',
                        description: 'Louco louco',
                        img: 'https://www.carnailha.com.br/resources/img/superbatera.png',
                        link: 'https://www.carnailha.com.br/',
                    }
                ]
            })
            .end(function (err, res) {
                expect(res.status).to.eql(201);
                expect(res.body.code).to.eql(201);
                expect(res.body.slider).to.not.be.null;
                console.log(res.body);
                slider = res.body.slider;
                done();
            });
    });

    it('should get an array of sliders and their images', function (done) {
        this.timeout(200000);
        chai.request(server)
            .get(`/api/v1/slider`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.sliders).to.not.be.null;
                expect(res.body.sliders).to.be.an('array');

                done();
            });
    });

    it('should get a slider', function (done) {
        this.timeout(200000);
        chai.request(server)
            .get(`/api/v1/slider/${slider._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.slider).to.not.be.null;

                done();
            });
    });

    it('should update a slider', function (done) {
        this.timeout(200000);
        chai.request(server)
            .put('/api/v1/slider')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                ...slider,
                active_amount: 3
            })
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.slider).to.not.be.null;

                expect(res.body.slider.active_amount).to.eql(3);
                done();
            });
    });

    it('should delete a slider', function (done) {
        this.timeout(200000);
        chai.request(server)
            .delete(`/api/v1/slider/${slider._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);

                done();
            });
    });

    /* it('should delete all sliders', function (done) {
        chai.request(server)
            .get(`/api/v1/slider`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.sliders).to.not.be.null;
                expect(res.body.sliders).to.be.an('array');
                res.body.sliders.forEach(element => {
                    //console.log(element);
                    chai.request(server)
                        .delete(`/api/v1/slider/${element._id}`)
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