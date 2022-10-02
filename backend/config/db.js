const mongoose = require('mongoose');

// const uri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@cluster0.dn7ou.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected');
        // console.log(`MongoDB connected: ${conn.connection.host}`.green.underline);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;