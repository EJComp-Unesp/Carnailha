let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let expect = chai.expect;
let should = chai.should;

let server = require('../../loader.js');
let token = require('./token');
describe('Test News CRUD is Working', function (done) {
    let caravan;
    it('should create a news', function (done) {
        chai.request(server)
            .post('/api/v1/news')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                heading: 'NOTÍCIA DE HOJE',
                subheading: 'Não a de ontem.',
                img: 'https://carnailha.com.br/resources/img/bg-01.jpg',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque id diam vel quam elementum pulvinar etiam. Dictumst quisque sagittis purus sit amet. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Aenean euismod elementum nisi quis. Massa tincidunt nunc pulvinar sapien et ligula. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Quis risus sed vulputate odio ut enim blandit volutpat. Sed cras ornare arcu dui vivamus arcu felis. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Morbi tincidunt augue interdum velit euismod in pellentesque. Duis ut diam quam nulla. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Sed vulputate odio ut enim blandit volutpat maecenas. Quis lectus nulla at volutpat diam ut venenatis tellus in.',
                author: 'Pessoa',
            })
            .end(function (err, res) {
                expect(res.status).to.eql(201);
                expect(res.body.code).to.eql(201);
                expect(res.body.news).to.not.be.null;

                news = res.body.news;
                done();
            });
    });

    it('should get an array of news', function (done) {
        chai.request(server)
            .get(`/api/v1/news`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.newsa).to.not.be.null;
                expect(res.body.newsa).to.be.an('array');

                done();
            });
    });

    it('should get news', function (done) {
        chai.request(server)
            .get(`/api/v1/news/${news._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.news).to.not.be.null;

                done();
            });
    });

    it('should update news', function (done) {
        chai.request(server)
            .put('/api/v1/news')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                ...news,
                heading: 'NOTÍCIA 2.0'
            })
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.news).to.not.be.null;

                expect(res.body.news.heading).to.eql('NOTÍCIA 2.0');
                expect(res.body.news.updated_at).to.not.be.null;
                done();
            });
    });

    it('should delete the last news', function (done) {
        chai.request(server)
            .delete(`/api/v1/news/${news._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);

                done();
            });
    });

    /* it('should delete all news', function (done) {
        chai.request(server)
            .get(`/api/v1/news`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.newsa).to.not.be.null;
                expect(res.body.newsa).to.be.an('array');
                res.body.newsa.forEach(element => {
                    //console.log(element);
                    chai.request(server)
                        .delete(`/api/v1/news/${element._id}`)
                        .set('authorization', `Bearer ${token.get().accessToken}`)
                        .end(function (err, res) {
                            expect(res.status).to.eql(200);
                            expect(res.body.code).to.eql(200);
                        });
                });
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);

                done();
            });
    });  */
});