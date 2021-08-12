const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const getIndices = require('../services/docs.service');
const searchService = require('../services/search.service');
app.use(bodyParser.json());
app.use(cors());
app.get('/test', (req, res)=>{
    res.send({
        status:true
    })
})
// create single document
app.post('/createdoc/:index/:id', (req, res)=>{
    getIndices.createDoc(req, res);
})

// create index
app.get('/createIndex/:index', (req, res)=>{
    getIndices.createIndex(req, res);
})

// delete index
app.get('/deleteIndex/:index', (req, res)=>{
    getIndices.deleteIndex(req, res);
})

// get all indices
app.get('/indices', (req, res)=>{
     getIndices.getIndicesDetail(req, res);
})




// get all data of a document

app.get('/data/:index', (req, res)=>{
    getIndices.getData(req, res);
})


//search data by field & phrase
app.get('/:index/searchText/:field/:phrase', (req, res)=>{
    searchService.searchPhraseByField(req, res);
})


module.exports = app