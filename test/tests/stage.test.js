let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let expect = chai.expect;
let should = chai.should;

let server = require('../../loader.js');
let token = require('./token');

describe('Test Stages CRUD is Working', function(done){
    let stage;
    it('should get an array of errors for blank fields', function(done){
        let {MESSAGE_FILE} = require('../../config/config');
        let msg = require('../../config/messages/' + MESSAGE_FILE).stage;
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/stage')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                name: "",
                img : "" 
            })
            .end(function(err, res){                
                console.log(res.body);
                expect(res.status).to.eql(406);
                expect(res.body.code).to.eql(406);
                expect(res.body.errors.name.msg).to.be.eql(msg.blank_name);
                expect(res.body.errors.img.msg).to.be.eql(msg.blank_img);

                done();      
            });
    });

    it('should create a stage', function(done){
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/stage')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                name : "PALCO PRINCIPAL",
                img : "https://www.carnailha.com.br/resources/img/PALCO%20principal%20tati%20(site)%20altera%C3%A7%C3%A3o%202.png"
            })
            .end(function(err, res){
                expect(res.status).to.eql(201);
                expect(res.body.code).to.eql(201);
                expect(res.body.stage).to.not.be.null;
                stage = res.body.stage;
                done();      
            });
    });

    it('should get an array of stages', function(done){
        this.timeout(200000);
        chai.request(server)
            .get(`/api/v1/stage`)
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.stages).to.not.be.null;
                expect(res.body.stages).to.be.an('array');

                done();      
            });
    });

    it('should get an stage', function(done){
        this.timeout(200000);
        chai.request(server)
            .get(`/api/v1/stage/${stage._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.stage).to.not.be.null;

                done();      
            });
    });

    it('should update stage', function(done){
        this.timeout(200000);
        chai.request(server)
            .put('/api/v1/stage')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                ...stage,
                name : "PALCO"
            })
            .end(function(err, res){          
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.stage).to.not.be.null;

                expect(res.body.stage.name).to.eql('PALCO');
                done();      
            });
    });

    it('should delete stage', function(done){
        this.timeout(200000);
        chai.request(server)
            .delete(`/api/v1/stage/${stage._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                
                done();      
            });
    });
});