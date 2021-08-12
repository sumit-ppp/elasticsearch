const esClient = require('../../database');
const esb  =  require('elastic-builder');
exports.searchPhrase = function(req, res){
    const indexName = req.params.index;
    esClient.search({
      index: indexName,
      body:{
        "query": {
            "query_string": {
              "query": req.params.phrase,
              "default_field": req.params.field
            
          }
        }
    }
    }).then(result =>{
     console.log(result);
     return res.send({result});
    }).catch(error=>{
      console.log(error);
      res.send(error);x
    })
     
     
     
  }

  exports.searchPhraseByField = function(req, res){
    const indexName = req.params.index;
    const field = req.params.field;
    const requestBody =    new esb.RequestBodySearch()
    .query(new esb.MatchQuery(req.params.field, req.params.phrase));
    console.log(requestBody.toJSON());
    esClient.search({
        index:indexName,
        _source: req.params.field,
        body:requestBody.toJSON()
    })
    .then(result =>{
     console.log(result);
     return res.send({result});
    }).catch(error=>{
      console.log(error);
      res.send(error);x
    })
     
     
     
  }
  
  exports.searchPhrase = function(req, res){
    const indexName = req.params.index;
    esClient.search({
      index: indexName,
      body:{
        "query": {
            "query_string": {
              "query": req.params.phrase,
              "default_field": req.params.field
            
          }
        }
    }
    }).then(result =>{
     console.log(result);
     return res.send({result});
    }).catch(error=>{
      console.log(error);
      res.send(error);x
    })
     
     
     
  }

  exports.searchPhraseByfilter = function(req, res){
    const indexName = req.params.index;
    const requestBody =    new esb.RequestBodySearch().agg()
    esClient.search({
      index: indexName,
      body:{
        "query": {
            "query_string": {
              "query": req.params.phrase,
              "default_field": req.params.field
            
          }
        }
    }
    }).then(result =>{
     console.log(result);
     return res.send({result});
    }).catch(error=>{
      console.log(error);
      res.send(error);x
    })
     
     
     
  }