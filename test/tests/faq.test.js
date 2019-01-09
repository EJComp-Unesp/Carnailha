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
                type: 'Dúvidas Gerais',
                questions: [{
                    question: 'Quais os dias e horários do evento?',
                    answer: 'O Carnailha ocorre entre os dias 01 e 05 de março de 2019, das 18h00 às 04h00 do dia seguinte (terminando, portanto, às 04h00 do dia 06 de março de 2019).'
                },
                {
                    question: 'Qual o local do evento?',
                    answer: 'Ainda não definido, porém costuma ser realizado em Ilha Solteira na Praia Catarina, localizada na saída da cidade, sentido Selvíria – MS. Para mais detalhes clique no link: https://goo.gl/maps/fzziPjjovwK2.'                    
                }]
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
                type: 'Alojamento'
            })
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.faq).to.not.be.null;

                expect(res.body.faq.type).to.eql('Alojamento');
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