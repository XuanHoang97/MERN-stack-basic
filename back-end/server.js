require('dotenv').config();
const {connectDB} = require('./configs/db');

connectDB();

const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute');
const {errorHandle} = require('./middlewares/errorHandle');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/posts', postRoute);

// unhandle Route
app.all('*', (req, res) => {
    const err = new Error('Route not found');
    err.status = 404;
    next(err);
});
app.use(errorHandle);

const port = process.env.APP_PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));