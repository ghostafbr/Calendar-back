const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB Online');
    } catch (error) {
        console.error(error);
        throw new Error('Something went wrong connecting to the database');
    }
}

module.exports = {
    dbConnection
}
