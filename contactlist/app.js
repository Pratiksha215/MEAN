//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb @ 27017');
})
mongoose.connection.on('error',(err)=>{
     if(err)
     {
         console.log('Error in Database conection',err);
     }
})

//port no
const port = 3000;

//adding middleware --cors
app.use(cors());

//static files
app.use(express.static(path.join(__dirname,'public')));

//body-parser
app.use(bodyparser.json());

//routes
app.use('/api',route);

//testing Server
app.get('/',(req,res)=>{
    res.send('foobar');
});


app.listen(port,()=>{
  console.log('server started at port:'+port);
});