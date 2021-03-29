// Test suite
const chai = require('chai'); // test framework
const { expect } = require('chai');
const chaiHttp = require('chai-http'); // http client 
const News = require('../src/models/news')
const app = require('../src/app')
const conn = require('../src/db/index')
const request = require('supertest');

chai.use(chaiHttp);

describe('News', () => {
    // connect to db
    before((done) => {
        conn.connect()
            .then(() => done())
            .catch((err) => done(err));
    })

    // disconnect from db
    after((done) => {
        conn.close()
            .then(() => done())
            .catch((err) => done(err));
    })

    beforeEach((done) => {
        News.remove({}, (err) => {
            done();
        });
        let newsDao = new News({ title: 'test55', description: 'dsadsa', isSports: false })
        newsDao.save()
    });

    it('should return status 200 for news page', (done) => {
        request(app).get('/news')
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                done(err);
            });
    });


    it('should return status 200 for view all news page', (done) => {
        request(app).get('/news/all')
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    it('Should return 400 after deleting non-existing user', (done) => {
        request(app).get('/news/delete/1')
            .then((res) => {
                expect(res).to.have.status(400);
                done()
            })
            .catch((err) => done(err));
    });

    it('Should return 302 after deleting an existing user', (done) => {
        request(app).post('/news')
            .send({ title: 'ToBeDeleted', description: 'dasdsadsa', isSports: false })
            .then((res) => {
                News.findOne({ title: 'ToBeDeleted' }, (err, data) => {
                    if (err) { done(err) }
                    let id = data._id
                    request(app).get('/news/delete/' + id)
                        .then((res) => {
                            expect(res).to.have.status(302);
                            done()
                        })
                        .catch((err) => {
                            done(err)
                        })
                })
            })
            .catch((err) => done(err));
    });

    it('Should return 302 adding user', (done) => {
        request(app).post('/news')
            .send({title: 'test' })
            .then((res) => {
                expect(res).to.have.status(302);
                done()
            })
            .catch((err) => done(err));
    });

    it('Should return 302 after update user', (done) => {
        request(app).post('/news')
            .send({title: 'test', description: 'rest'})
            .then((res) => {
                News.findOne({title: 'test'}, (err, data) =>{
                    if(err) { done(err) }
                    let id = data._id
                    request(app).post('/news')
                        .send({title: 'newTitle', _id: id, _method: 'PUT'})
                        .then((res) =>{
                            expect(res).to.have.status(302);
                            done()
                        })
                        .catch((err) => done(err))
                })
            })
            .catch((err) => done(err));
    });

    it('Should return 400 after update non-existent user', (done) => {
        request(app).post('/news')
            .send({title: 'test', description: 'rest', _id: 1, _method: 'PUT'})
            .then((res) => {
                expect(res).to.have.status(400);
                done()
            })
            .catch((err) => done(err));
    });
})
