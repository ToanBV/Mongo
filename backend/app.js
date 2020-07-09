// Call in installed dependencies
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';

import mainRoutes from './server/routes/main';
import { MONGODB, PORT } from './server/config/env';
// set up express app
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());

// setup mongoose
mongoose.connect(MONGODB, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=>{
        console.log('Database connected');
    })
    .catch((error)=>{
        console.log('connected errors');
    })

//Lấy kết nối mặc định
var db = mongoose.connection;

mongoose.Promise = global.Promise;


// set up port number
const port = 5035;
// set up home route
app.use('/api', mainRoutes);

app.get('/', (request, respond) => {
    respond.status(200).json({
        message: 'Welcome to Project Support',
    });
});
app.listen(PORT, (request, respond) => {
    console.log(`Our server is live on ${PORT}. Yay!`);
});
