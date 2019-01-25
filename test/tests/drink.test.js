let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let expect = chai.expect;
let should = chai.should;

let server = require('../../loader.js');
let token = require('./token');

describe('Test Drinks CRUD is Working', function (done) {
    let drink;
    it('should get an array of errors for blank fields', function (done) {
        let { MESSAGE_FILE } = require('../../config/config');
        let msg = require('../../config/messages/' + MESSAGE_FILE).drink;
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/drink')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                name: "",
                quantity: 0,
                icon: ""
            })
            .end(function (err, res) {
                console.log(res.body);
                expect(res.status).to.eql(406);
                expect(res.body.code).to.eql(406);
                expect(res.body.errors.name.msg).to.be.eql(msg.blank_name);
                expect(res.body.errors.quantity.msg).to.be.eql(msg.min_quantity);
                expect(res.body.errors.icon.msg).to.be.eql(msg.blank_icon);

                done();
            });
    });

    it('should create a drink', function (done) {
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/drink')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                name: "VODKA",
                quantity: 1000,
                icon: "https://www.carnailha.com.br/resources/img/bebidas/svg/bottle-1.svg"
            })
            .end(function (err, res) {
                expect(res.status).to.eql(201);
                expect(res.body.code).to.eql(201);
                expect(res.body.drink).to.not.be.null;
                drink = res.body.drink;
                done();
            });
    });

    it('should get an array of drinks', function (done) {
        this.timeout(200000);
        chai.request(server)
            .get(`/api/v1/drink`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.drinks).to.not.be.null;
                expect(res.body.drinks).to.be.an('array');

                done();
            });
    });

    it('should get an drink', function (done) {
        this.timeout(200000);
        chai.request(server)
            .get(`/api/v1/drink/${drink._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.drink).to.not.be.null;

                done();
            });
    });

    it('should update drink', function (done) {
        this.timeout(200000);
        chai.request(server)
            .put('/api/v1/drink')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                ...drink,
                name: "ÁGUA DE BATATA"
            })
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.drink).to.not.be.null;

                expect(res.body.drink.name).to.eql('ÁGUA DE BATATA');
                done();
            });
    });

    it('should delete drink', function (done) {
        this.timeout(200000);
        chai.request(server)
            .delete(`/api/v1/drink/${drink._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);

                done();
            });
    });
});