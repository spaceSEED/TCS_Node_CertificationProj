// Test suite
const chai = require('chai'); // test framework
const { expect } = require('chai');
const chaiHttp = require('chai-http'); // http client 
const News = require('../src/models/news')
const app = require('../src/app')
const conn = require('../src/db/index')
const request = require('supertest');
const User = require('../src/models/user')

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
        News.remove()
            .then(res => {
                console.log(res)
                done()
            })
            .catch(err => done(err))

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

    it('Should return 401 after deleting non-existing user', (done) => {
        request(app).get('/news/delete/1')
            .then((res) => {
                expect(res).to.have.status(401);
                done()
            })
            .catch((err) => done(err));
    });

    it('Should return 302 after deleting an existing user', (done) => {
        // create admin
        request(app).get('/users/signup')
            .send({ name: 'dsadsadsa', email: 'est@gmail.com', password: '123456789' })
            .then(res => {
                // login to admin
                request(app).get('/users/login')
                    .send({ email: 'est@gmail.com', password: '123456789' })
                    .then(res => {
                        console.log('login:', res)
                        // create news
                        News.create({ title: 'Spacex lands on Neptune instead of Mars', description: 'dasdsa das dsa  dsa d sa dsa d sa dsa d sa dsa  dsa  d sa d sa dsa das das das d sa d sa dsa  ds a dsa  das d sa d sa d sa ', isSports: false })
                        News.create({ title: 'One Word: DogeCoin', description: 'dasdsa das dsa  dsa d sa dsa d sa dsa d sa dsa  dsa  d sa d sa dsa das das das d sa d sa dsa  ds a dsa  das d sa d sa d sa ', isSports: false })
                        News.create({ title: 'To the Moon', description: 'dasdsa das dsa  dsa d sa dsa d sa dsa d sa dsa  dsa  d sa d sa dsa das das das d sa d sa dsa  ds a dsa  das d sa d sa d sa ', isSports: false })
                        News.create({ title: 'ToBeDeleted', description: 'dasdsadsa', isSports: false })
                            .then((res) => {
                                // get id of news
                                News.findOne({ title: 'ToBeDeleted' })
                                    .then(data => {
                                        // delete news
                                        request(app).get('/news/delete/' + data._id)
                                            .then(deletedRes => {
                                                // console.log(deletedRes)
                                                expect(deletedRes).to.have.status(302)
                                                done()
                                            })
                                            .catch(err => {done(err)})
                                    })
                                    .catch(err => done(err))
                            })
                            .catch(err => done(err))
                    })
                    .catch(err => done(err))
            })
            .catch(err => done(err))
            
        // request(app).post('/news')
        //     .send({ title: 'ToBeDeleted', description: 'dasdsadsa', isSports: false })
        //     .then((res) => {
        //         News.findOne({ title: 'ToBeDeleted' }, (err, data) => {
        //             if (err) { done(err) }
        //             let id = data._id
        //             request(app).get('/news/delete/' + id)
        //                 .then((res) => {
        //                     expect(res).to.have.status(302);
        //                     done()
        //                 })
        //                 .catch((err) => {
        //                     done(err)
        //                 })
        //         })
        //     })
        //     .catch((err) => done(err));
    });

    // it('Should return 302 after adding user', (done) => {
    //     request(app).post('/news')
    //         .send({title: 'test' })
    //         .then((res) => {
    //             expect(res).to.have.status(302);
    //             done()
    //         })
    //         .catch((err) => done(err));
    // });

    // it('Should return 302 after update user', (done) => {
    //     request(app).post('/news')
    //         .send({title: 'test', description: 'rest'})
    //         .then((res) => {
    //             News.findOne({title: 'test'}, (err, data) =>{
    //                 if(err) { done(err) }
    //                 let id = data._id
    //                 request(app).post('/news')
    //                     .send({title: 'newTitle', _id: id, _method: 'PUT'})
    //                     .then((res) =>{
    //                         expect(res).to.have.status(302);
    //                         done()
    //                     })
    //                     .catch((err) => done(err))
    //             })
    //         })
    //         .catch((err) => done(err));
    // });

    // it('Should return 400 after update non-existent user', (done) => {
    //     request(app).post('/news')
    //         .send({title: 'test', description: 'rest', _id: 1, _method: 'PUT'})
    //         .then((res) => {
    //             expect(res).to.have.status(400);
    //             done()
    //         })
    //         .catch((err) => done(err));
    // });
})
