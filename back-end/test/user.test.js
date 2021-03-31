// // Test suite
// const chai = require('chai'); // test framework
// const { expect } = require('chai');
// const chaiHttp = require('chai-http'); // http client 
// const News = require('../src/models/news')
// const app = require('../src/app')
// const conn = require('../src/db/index')
// const request = require('supertest');
// const User = require('../src/models/user');
// const { getMaxListeners } = require('../src/app');
// const mongoose = require('mongoose')

// chai.use(chaiHttp);

// describe('users', () => {
//     let authenticatedUser = request.agent(app)
//     // connect to db
//     before((done) => {
//         conn.connect()
//         .then(() => {
//             done()
//         })
//         .catch((err) => console.log(err));
//     })

//     // disconnect from db
//     after((done) => {
//         // mongoose.connection.db.dropDatabase('users')
//         conn.close()
//         .then(() => {
//             done()
//         })
//         .catch((err) => console.log(err));
//     })

//     // view singup
//     it('should return status 200 for signup page', (done) => {
//         request(app).get('/news/signup')
//             .then((res) => {
//                 expect(res).to.have.status(200);
//                 done()
//             })
//             .catch((err) => {
//                 done(err)
//             });
//     });

//     // view login
//     it('should return status 200 for login page', (done) => {
//         request(app).get('/news/login')
//             .then((res) => {
//                 expect(res).to.have.status(200);
//                 done()
//             })
//             .catch((err) => {
//                 done(err)
//             });
//     });
   

// })
