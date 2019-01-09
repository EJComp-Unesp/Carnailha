let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let expect = chai.expect;
let should = chai.should;

let server = require('../../loader.js');
let token = require('./token');

describe('Test OAuth is Working', function(done){
    it('should get Access Token with Password grant', function(done){
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/oauth/token')
            .type('form')
            .send({
                client_id:'carnailhaWeb',
                client_secret:'carnaweb',
                grant_type:'password',
                username:'admin',
                password:'admin123',
                scope:'teste'
            })
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.accessToken).to.not.be.null;
                expect(res.body.accessTokenExpiresAt).to.not.be.null;
                console.log(res.body.accessToken);
                
                token.set(res.body);
                done();      
            });
    });

    // it('should get Access Token with Refresh Token grant', function(done){
    //     this.timeout(100000);
    //     chai.request(server)
    //         .post('/api/v1/oauth/token')
    //         .type('form')
    //         .send({
    //             client_id:'carnailhaWeb',
    //             client_secret:'carnaweb',
    //             grant_type:'refresh_token',
    //             refresh_token:token.get().refreshToken
    //         })
    //         .end(function(err, res){
    //             expect(res.status).to.eql(200);
    //             expect(res.body.accessToken).to.not.be.null;
    //             expect(res.body.accessTokenExpiresAt).to.not.be.null;

    //             token.set(res.body);
    //             done();      
    //         });
    // });

    // it('should do a request to API', function(done){
    //     this.timeout(20000);
    //     chai.request(server)
    //         .get('/api/v1/user')
    //         .set('authorization', `Bearer ${token.get().accessToken}`)
    //         .end(function(err, res){
    //             expect(res.status).to.eql(200);
    //             done();
    //         });
    // })
});