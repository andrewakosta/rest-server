const mongoose = require('mongoose');
require('colors')
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log('Connection success'.green);
    } catch (error) {
        console.log(error.toString().red);
    }
}
module.exports = { dbConnection }