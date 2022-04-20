require('dotenv').config();
const {connectDB} = require('./configs/db');

connectDB();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            posts:[{
                title: 'First Post',
                body: 'This is the first post'
            }]
        }
    });
});

const port = process.env.APP_PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));