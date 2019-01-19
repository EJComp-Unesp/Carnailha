let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let expect = chai.expect;
let should = chai.should;

let server = require('../../loader.js');
let token = require('./token');

describe('Test Caravans CRUD is Working', function(done){
    let caravan;
    it('should get an array of errors for blank fields', function(done){
        let {MESSAGE_FILE} = require('../../config/config');
        let msg = require('../../config/messages/' + MESSAGE_FILE).caravan;
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/caravan')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                state: "",
                cities:[
                    {
                        city: "",
                        promoters: [{              
                            name:''
                        },
                        {              
                            name:''
                        }]
                    }
                ]
            })
            .end(function(err, res){                
                console.log(res.body);
                expect(res.status).to.eql(406);
                expect(res.body.code).to.eql(406);
                expect(res.body.errors.state.msg).to.be.eql(msg.blank_state);
                expect(res.body.errors['cities[0].city'].msg).to.be.eql(msg.blank_city);
                expect(res.body.errors['cities[0].promoters[0].name'].msg).to.be.eql(msg.blank_promoter_name);
                expect(res.body.errors['cities[0].promoters[1].name'].msg).to.be.eql(msg.blank_promoter_name);

                // expect(res.body.caravan).to.not.be.null;

                done();      
            });
    });

    it('should create a group of caravans for a state', function(done){
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/caravan')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                state: "São Paulo",
                cities:[
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
                            name:'Batata Doce',
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
                console.log(res.body);
                caravan = res.body.caravan;
                done();      
            });
    });

    it('should get an array of states-cities-caravans', function(done){
        this.timeout(200000);
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
        this.timeout(200000);
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
        this.timeout(200000);
        chai.request(server)
            .put('/api/v1/caravan')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                ...caravan,
                state: 'Arroz doce!'
            })
            .end(function(err, res){          
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.caravan).to.not.be.null;

                expect(res.body.caravan.state).to.eql('Arroz doce!');
                done();      
            });
    });

    it('should delete caravan', function(done){
        this.timeout(200000);
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