// Call in installed dependencies
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import mainRoutes from './server/routes/main';

// set up express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use('/api/', mainRoutes);
// setup mongoose
mongoose.connect('mongodb://localhost:27017/projectsupport', { useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=>{
        console.log('Database connected');
    })
    .catch((error)=>{
        console.log('connected errors');
    })
// set up port number
const port = 5035;
// set up home route
app.get('/', (request, respond) => {
    respond.status(200).json({
        message: 'Welcome to Project Support',
    });
});
app.listen(port, (request, respond) => {
    console.log(`Our server is live on ${port}. Yay!`);
});
