let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let expect = chai.expect;
let should = chai.should;

let server = require('../../loader.js');
let token = require('./token');
describe('Test Caravans CRUD is Working', function(done){
    let caravan;
    it('should create a group of caravans for a state', function(done){
        chai.request(server)
            .post('/api/v1/caravan')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                state: "São Paulo",
                citys:[
                    {
                        city: "Presidente Prudente",
                        promoters: [{              
                            name:'Batatão',
                            img:'https://www.carnailha.com.br/resources/img/promoters/Campo%20Grande.jpg',
                            wpp: '(18) 991793921',
                            email: 'gustavo.damicodionisio@hotmail.com',
                            face_name: 'gustavo.damico.9',
                            face_link: 'https://www.facebook.com/gustavo.damico.9'
                        },
                        {              
                            name:'Arroz Doce',
                            img:'https://www.carnailha.com.br/resources/img/promoters/Campo%20Grande.jpg',
                            wpp: '(18) 991793921',
                            email: 'gustavo.damicodionisio@hotmail.com',
                            face_name: 'gustavo.damico.9',
                            face_link: 'https://www.facebook.com/gustavo.damico.9'
                        }]
                    }
                ]
            })
            .end(function(err, res){                
                expect(res.status).to.eql(201);
                expect(res.body.code).to.eql(201);
                expect(res.body.caravan).to.not.be.null;

                caravan = res.body.caravan;
                done();      
            });
    });

    it('should get an array of states-citys-caravans', function(done){
        chai.request(server)
            .get(`/api/v1/caravan`)
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.caravans).to.not.be.null;
                expect(res.body.caravans).to.be.an('array');

                done();      
            });
    });

    it('should get an caravan', function(done){
        chai.request(server)
            .get(`/api/v1/caravan/${caravan._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.caravan).to.not.be.null;

                done();      
            });
    });

    it('should update caravan', function(done){
        chai.request(server)
            .put('/api/v1/caravan')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                ...caravan,
                answer: 'Arroz doce!'
            })
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.caravan).to.not.be.null;

                expect(res.body.caravan.answer).to.eql('Arroz doce!');
                done();      
            });
    });

    it('should delete caravan', function(done){
        chai.request(server)
            .delete(`/api/v1/caravan/${caravan._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                
                done();      
            });
    });
});