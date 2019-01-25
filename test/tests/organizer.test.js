let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let expect = chai.expect;
let should = chai.should;

let server = require('../../loader.js');
let token = require('./token');

describe('Test Organizers CRUD is Working', function(done){
    let organizer;
    it('should get an array of errors for blank fields', function(done){
        let {MESSAGE_FILE} = require('../../config/config');
        let msg = require('../../config/messages/' + MESSAGE_FILE).organizer;
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/organizer')
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

    it('should create a organizer', function(done){
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/organizer')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                name : "BLOCO SUPERBATERIA",
                img : "https://www.carnailha.com.br/resources/img/superbatera.png"
            })
            .end(function(err, res){
                expect(res.status).to.eql(201);
                expect(res.body.code).to.eql(201);
                expect(res.body.organizer).to.not.be.null;
                organizer = res.body.organizer;
                done();      
            });
    });

    it('should get an array of organizers', function(done){
        this.timeout(200000);
        chai.request(server)
            .get(`/api/v1/organizer`)
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.organizers).to.not.be.null;
                expect(res.body.organizers).to.be.an('array');

                done();      
            });
    });

    it('should get an organizer', function(done){
        this.timeout(200000);
        chai.request(server)
            .get(`/api/v1/organizer/${organizer._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.organizer).to.not.be.null;

                done();      
            });
    });

    it('should update organizer', function(done){
        this.timeout(200000);
        chai.request(server)
            .put('/api/v1/organizer')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                ...organizer,
                name : "SUPERBATERIA"
            })
            .end(function(err, res){          
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.organizer).to.not.be.null;

                expect(res.body.organizer.name).to.eql('SUPERBATERIA');
                done();      
            });
    });

    it('should delete organizer', function(done){
        this.timeout(200000);
        chai.request(server)
            .delete(`/api/v1/organizer/${organizer._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                
                done();      
            });
    });
});