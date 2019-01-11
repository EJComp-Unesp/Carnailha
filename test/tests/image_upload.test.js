let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let expect = chai.expect;
let should = chai.should;

let server = require('../../loader.js');
let token = require('./token');
describe('Test ImageUpload is Working', function(done){
    let img;
    it('should upload a image', function(done){
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/upload')
            .set('authorization', `Bearer ee28c8a7dd652fcc6afc527cdcbb023a27f9205c`)
            .attach('file', 'test/tests/imgs/test_1_choro_js.jpg')
            .end(function(err, res){                
                expect(res.status).to.eql(201);
                expect(res.body.code).to.eql(201);
                expect(res.body.img).to.not.be.null;

                img = res.body.img;
                done();      
            });
    });

    it('should delete a image', function(done){
        console.log(img)
        chai.request(server)
            .delete(`/api/v1/upload`)
            // .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                file_path: img
            })
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                
                done();      
            });
    });
});