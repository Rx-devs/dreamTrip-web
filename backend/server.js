const express = require('express');
const colors = require('colors');
const cors = require('cors');
const connectDb = require('./config/db');
const dotenv = require('dotenv').config();
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const port = process.env.PORT || 5000;

const app = express();

// connect database -> server -> route -> controller

// connect mongodb
connectDb();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/users', require('./routes/userRoutes'));


/* app.get('/api/blogs', (req, res) => {
    // res.send('got blogs');
    // res.json({ message: 'Get blogs' });
    res.status(200).json({ message: 'get blogs' });
}) */

/* 
const uri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@cluster0.dn7ou.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        // console.log('database connected');
        const database = client.db('dream_trip');
        const usersCollection = database.collection('users');
        const allBlogsCollection = database.collection('allblogs');

    // Load all Blogs
        app.get('/allblogs', async (req, res) => {
            const cursor = allBlogsCollection.find({});
			const page = req.query.page;
			const size = parseInt(req.query.size);
			let allblogs;
			const count = await cursor.count();
			if(page){
				allblogs = await cursor.skip(page*size).limit(size).toArray();
			}
			else{
				allblogs = await cursor.toArray();
			}
			
            res.send({
				count,
				allblogs
			});
        });
        

    // get a single blog
        app.get('/allblogs/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const blog = await allBlogsCollection.findOne(query);
            res.json(blog);
        });
    // add a single blog
        app.post('/allblogs', async (req, res) => {
            const blog = req.body;
            const result = await allBlogsCollection.insertOne(blog);
            res.json(result);
        });

    // delete a blog
        app.delete('/allblogs/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await allBlogsCollection.deleteOne(query);
            res.json(result);
        });

    // load user as admin or not
        app.get('/users/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email };
            const user = await usersCollection.findOne(query);
            let isAdmin = false;
            if (user?.role === 'admin') {
                isAdmin = true;
            }
            res.json({ admin: isAdmin });
        });

    // add an user
        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await usersCollection.insertOne(user);
            res.json(result);
        });

    // update user
        app.put('/users', async (req, res) => {
            const user = req.body;
            const filter = { email: user.email };
            const options = { upsert: true };
            const updateDoc = { $set: user };
            const result = await usersCollection.updateOne(filter, updateDoc, options);
            res.json(result);
        });

    // make admin
        app.put('/users/admin', async (req, res) => {
            const user = req.body;
            const filter = { email: user.email };
            const updateDoc = { $set: { role: 'admin' } };
            const result = await usersCollection.updateOne(filter, updateDoc);
            res.json(result);
        });

    }
    finally {
        // Ensures that the client will close when you finish/error.
        // await client.close();
    };
};
run().catch(console.dir); */

app.get('/', (req, res) => {
    res.send('Welcome to DreamTrip!')
});

app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
});