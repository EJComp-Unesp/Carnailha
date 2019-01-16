let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let expect = chai.expect;
let should = chai.should;

let server = require('../../loader.js');
let token = require('./token');

let { MESSAGE_FILE } = require('../../config/config');
let msg = require('../../config/messages/' + MESSAGE_FILE).upload;

describe('Test ImageUpload is Working', function (done) {
    let img;
    it('Should get a file size error', function (done) {
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/upload')
            .set('authorization', `Bearer ee28c8a7dd652fcc6afc527cdcbb023a27f9205c`)
            .attach('file', 'test/tests/imgs/tanenbaum_bio_vs_cc.png')
            .end(function (err, res) {
                expect(res.status).to.eql(406);
                expect(res.body.code).to.eql(406);
                expect(res.body.error).to.be.eql(msg.size);

                done();
            });
    });
    it('Should get a mimetype error', function (done) {
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/upload')
            .set('authorization', `Bearer ee28c8a7dd652fcc6afc527cdcbb023a27f9205c`)
            .attach('file', 'test/tests/imgs/test_1_choro_js.pdf')
            .end(function (err, res) {
                expect(res.status).to.eql(406);
                expect(res.body.code).to.eql(406);
                expect(res.body.error).to.be.eql(msg.mimetype);

                done();
            });
    });
    it('Should get a file count error', function (done) {
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/upload')
            .set('authorization', `Bearer ee28c8a7dd652fcc6afc527cdcbb023a27f9205c`)
            .attach('file', 'test/tests/imgs/test_1_choro_js.jpg')
            .attach('file', 'test/tests/imgs/test_1_choro_js.jpg')
            .end(function (err, res) {
                expect(res.status).to.eql(406);
                expect(res.body.code).to.eql(406);
                expect(res.body.error).to.be.eql(msg.count);

                done();
            });
    });
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