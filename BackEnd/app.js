const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());


//Middlewares

//Import routes
const postRoute = require('./routes/post');

app.use('/post', postRoute);

//routes
app.get('/',(reg, res) => {

res.send('Delta');

});


//connecting to mongo
mongoose.connect( process.env.DB_CONNECTION, {useNewUrlParser: true}, () => 
    console.log('connected to DB :)')

);


app.listen(3000);