const express = require('express');
const cors = require('cors');
const config = require('config');
const bodyParser = require('body-parser');

const port = config.servicePort;
//const elasticsearch = require('./database');

const app =  express();

app.use(cors());
app.options('*',cors());

app.use(bodyParser.urlencoded({
    extended : true
}))

const server = require('http').createServer(app);
const apiroutes = require('./api/routes/routes');

app.use('/', apiroutes);

server.on('listening',()=>{
console.log('server is listening at ',port);
})

server.listen(port)

