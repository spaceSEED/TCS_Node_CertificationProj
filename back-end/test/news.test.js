// Test suite
const chai = require('chai'); // test framework
const { expect } = require('chai');
const chaiHttp = require('chai-http'); // http client 
const News = require('../src/models/news')

chai.use(chaiHttp);

describe('News', () => {
    // Get sport news 
    describe('Get all sport news', () => {
        // add news 
        let dummyNews = [
            { title: 'test1', description: 'description1', isSports: false },
            { title: 'test2', description: 'description2', isSports: true },
            { title: 'test3', description: 'description3', isSports: false },
            { title: 'test4', description: 'description4', isSports: true }
        ]
        it('should return status 200', (done) => {
            chai.request('http://localhost:3000')
                .get('/')
                .then((res) => {
                    // console.log(res)
                    expect(res).to.have.status(200); 
                    done();
                })
                .catch((err) => {
                    throw (err);
                });
        });
        it('should return only sport news', function(done) {
            newsDao = new News({title: 'test1', description: 'description1', isSports: false})
            newsDao.save()
            done()
            

                // chai.request('http://localhost:3000')
                //     .get('/')
                //     .then((res) => {
                //         // TODO: test if all will have true for isSports
                //         console.log(res)
                //         done();
                //     })
                //     .catch((err) => {
                //         console.log(err)
                //         throw (err);
                //     });  

            // News.insertMany(dummyNews, (err, data) => {
            //     if(!err){
            //         chai.request('http://localhost:3000')
            //         .get('/')
            //         .then((res) => {
            //             // TODO: test if all will have true for isSports
            //             console.log(res)
            //             done();
            //         })
            //         .catch((err) => {
            //             throw (err);
            //         });  
            //     }
            //     else{
            //         throw err
            //     }

            // })
        });
    });

    // // Get all news 
    // describe('Get all news', () => {
    //     it('should return status 200', (done) => {
    //         chai.request('http://localhost:3000')
    //             .get('/all')
    //             .then((res) => {
    //                 expect(res).to.have.status(200);
    //                 done();
    //             })
    //             .catch((err) => {
    //                 throw (err);
    //             });
    //     });
    // });

})
