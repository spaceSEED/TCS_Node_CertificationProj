// Test suite
const chai = require('chai'); // test framework
const { expect } = require('chai');
const chaiHttp = require('chai-http'); // http client 
const News = require('../src/models/news')
const app = require('../src/app')
const conn = require('../src/db/index')
const request = require('supertest');

chai.use(chaiHttp);

describe('Sports', () => {
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
    });

    // it('should return status 200 for sports page', (done) => {
    //     News.insertMany([
    //         {
    //             title: 'test1',
    //             isSports: true
    //         },
    //         {
    //             title: 'test2',
    //             isSports: true
    //         },
    //         {
    //             title: 'test3',
    //             isSports: false
    //         },
    //     ])
    //     .then(res =>{
    //         request(app).get('/sports')
    //         .then((res) => {
    //             expect(res).to.have.status(200);
    //             // console.log(res)
    //             done();
    //         })
    //         .catch((err) => {
    //             done(err);
    //         });
    //     })
    //     .catch(err => done(err))

    // });


   
})
