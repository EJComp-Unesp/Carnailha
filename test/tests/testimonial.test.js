let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let expect = chai.expect;
let should = chai.should;

let server = require('../../loader.js');
let token = require('./token');
describe('Test Testimonials CRUD is Working', function (done) {
    let testimonial;
    it('should test validation problems', function (done) {
        let {MESSAGE_FILE} = require('../../config/config');
        let msg = require('../../config/messages/' + MESSAGE_FILE).testimonial;
        chai.request(server)
            .post('/api/v1/testimonial')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                name: '',
                testimonial: '',
                img: '',
            })
            .end(function (err, res) {
                console.log(res.body);
                expect(res.status).to.eql(406);
                expect(res.body.code).to.eql(406);
                expect(res.body.errors.name.msg).to.be.eql(msg.blank_testimonial_name);
                expect(res.body.errors.testimonial.msg).to.be.eql(msg.blank_testimonial_testimonial);
                expect(res.body.testimonial).to.not.be.null;
                done();
            });
    });

    it('should add a testimonial', function (done) {
        chai.request(server)
            .post('/api/v1/testimonial')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                name: 'João Ninguém',
                testimonial: 'Nossa adorei',
                img: 'https://carnailha.com.br/resources/img/bg-01.jpg',
            })
            .end(function (err, res) {
                expect(res.status).to.eql(201);
                expect(res.body.code).to.eql(201);
                expect(res.body.testimonial).to.not.be.null;

                testimonial = res.body.testimonial;
                done();
            });
    });

    it('should get an array of testimonials', function (done) {
        chai.request(server)
            .get(`/api/v1/testimonial`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.testimonials).to.not.be.null;
                expect(res.body.testimonials).to.be.an('array');

                done();
            });
    });

    it('should get a testimonial', function (done) {
        chai.request(server)
            .get(`/api/v1/testimonial/${testimonial._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.testimonial).to.not.be.null;

                done();
            });
    });

    it('should update a testimonial', function (done) {
        chai.request(server)
            .put('/api/v1/testimonial')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                ...testimonial,
                name: 'Joana Ninguém'
            })
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.testimonial).to.not.be.null;

                expect(res.body.testimonial.name).to.eql('Joana Ninguém');
                expect(res.body.testimonial.updated_at).to.not.be.null;
                done();
            });
    });

    it('should delete the a testimonial', function (done) {
        chai.request(server)
            .delete(`/api/v1/testimonial/${testimonial._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);

                done();
            });
    });

    /* it('should delete all testimonial', function (done) {
        chai.request(server)
            .get(`/api/v1/testimonial`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.testimonials).to.not.be.null;
                expect(res.body.testimonials).to.be.an('array');
                res.body.testimonials.forEach(element => {
                    //console.log(element);
                    chai.request(server)
                        .delete(`/api/v1/testimonial/${element._id}`)
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