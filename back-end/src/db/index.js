const mongoose = require('mongoose')


function connect(){
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.MONGODB_URL,
            { useNewUrlParser: true, useCreateIndex: true })
            .then((res, err) =>{
                if(err) return reject(err)
                resolve()
            })
    })
}

function close(){
    return mongoose.disconnect()
}

module.exports = { connect, close }