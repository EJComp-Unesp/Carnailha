let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let expect = chai.expect;
let should = chai.should;

let server = require('../../loader.js');
let token = require('./token');
describe('Test FAQ CRUD is Working', function(done){
    let faq;
    it('should create a question-answer', function(done){
        chai.request(server)
            .post('/api/v1/faq')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({                
                question:'Potato is the best?',
                answer:'Yes, off course!!!',
                type: 'Local'
            })
            .end(function(err, res){                
                expect(res.status).to.eql(201);
                expect(res.body.code).to.eql(201);
                expect(res.body.faq).to.not.be.null;

                faq = res.body.faq;
                done();      
            });
    });

    it('should get an array of FAQ`s', function(done){
        chai.request(server)
            .get(`/api/v1/faq`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.faqs).to.not.be.null;
                expect(res.body.faqs).to.be.an('array');

                done();      
            });
    });

    it('should get an FAQ', function(done){
        chai.request(server)
            .get(`/api/v1/faq/${faq._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.faq).to.not.be.null;

                done();      
            });
    });

    it('should update FAQ', function(done){
        chai.request(server)
            .put('/api/v1/faq')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                ...faq,
                answer: 'Arroz doce!'
            })
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.faq).to.not.be.null;

                expect(res.body.faq.answer).to.eql('Arroz doce!');
                done();      
            });
    });

    it('should delete FAQ', function(done){
        chai.request(server)
            .delete(`/api/v1/faq/${faq._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                
                done();      
            });
    });
});