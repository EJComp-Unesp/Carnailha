let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let expect = chai.expect;
let should = chai.should;

let server = require('../../loader.js');
let token = require('./token');

describe('Test Gallery CRUD is Working', function(done){
    let gallery;
    it('should get an array of errors for blank fields', function(done){
        let {MESSAGE_FILE} = require('../../config/config');
        let msg = require('../../config/messages/' + MESSAGE_FILE).gallery;
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/gallery')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                gallery_name: "",
                images:[
                    {
                        name: '',
                        description: '',
                        img:'',
                    },
                    {
                        name: '',
                        description:'',
                        img:'',
                    }
                ]
            })
            .end(function(err, res){                
                console.log(res.body);
                expect(res.status).to.eql(406);
                expect(res.body.code).to.eql(406);
                expect(res.body.errors.gallery_name.msg).to.be.eql(msg.blank_gallery_name);
                expect(res.body.errors['images[0].name'].msg).to.be.eql(msg.blank_gallery_image_name);
                expect(res.body.errors['images[0].img'].msg).to.be.eql(msg.blank_gallery_image_img);

                // expect(res.body.gallery).to.not.be.null;

                done();      
            });
    });

    it('should create a image gallery', function(done){
        this.timeout(200000);
        chai.request(server)
            .post('/api/v1/gallery')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                gallery_name: "Festa na Árvore",
                images:[
                    {
                        name: 'Festa na árvore #1',
                        description:'Grande festa na árvore',
                        img:'https://www.carnailha.com.br/resources/img/promoters/Campo%20Grande.jpg',
                    },
                    {
                        name: 'Festa na árvore #2',
                        description:'Grande festa na árvore',
                        img:'https://www.carnailha.com.br/resources/img/promoters/Campo%20Grande.jpg',
                    }
                ]
            })
            .end(function(err, res){
                expect(res.status).to.eql(201);
                expect(res.body.code).to.eql(201);
                expect(res.body.gallery).to.not.be.null;
                console.log(res.body);
                gallery = res.body.gallery;
                done();      
            });
    });

    it('should get an array of galleries and their images', function(done){
        this.timeout(200000);
        chai.request(server)
            .get(`/api/v1/gallery`)
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.galleries).to.not.be.null;
                expect(res.body.galleries).to.be.an('array');

                done();      
            });
    });

    it('should get a gallery', function(done){
        this.timeout(200000);
        chai.request(server)
            .get(`/api/v1/gallery/${gallery._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.gallery).to.not.be.null;

                done();      
            });
    });

    it('should update gallery', function(done){
        this.timeout(200000);
        chai.request(server)
            .put('/api/v1/gallery')
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .send({
                ...gallery,
                gallery_name: 'Festa na árvore Z'
            })
            .end(function(err, res){          
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.gallery).to.not.be.null;

                expect(res.body.gallery.gallery_name).to.eql('Festa na árvore Z');
                done();      
            });
    });

    it('should delete gallery', function(done){
        this.timeout(200000);
        chai.request(server)
            .delete(`/api/v1/gallery/${gallery._id}`)
            .set('authorization', `Bearer ${token.get().accessToken}`)
            .end(function(err, res){                
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                
                done();      
            });
    });

    /* it('should delete all galleries', function (done) {
        chai.request(server)
            .get(`/api/v1/gallery`)
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.body.code).to.eql(200);
                expect(res.body.galleries).to.not.be.null;
                expect(res.body.galleries).to.be.an('array');
                res.body.galleries.forEach(element => {
                    //console.log(element);
                    chai.request(server)
                        .delete(`/api/v1/gallery/${element._id}`)
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
    }); */
});