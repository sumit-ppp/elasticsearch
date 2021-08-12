const esClient = require('../../database');


exports.getIndicesDetail = function(req, res){
   esClient.cat.indices({v: true}).then((result)=>{
    console.log(result);
    return res.send({result});
   }
   ).catch(error=>{
    console.log(error);
    res.send(error);x
  })
   
   
   
}

exports.createDoc = function(req, res){
   const indexName = req.params.index;
   esClient.create({
       index: indexName,
       id: req.params.id,
       body:req.body
   }).then(result =>{
    console.log(result);
    return res.send({result});
   }).catch(error=>{
    console.log(error);
    res.send(error);x
  })
   
    
    
 }


 
exports.createIndex = function(req, res){
    const indexName = req.params.index;
    esClient.indices.create({
        index: indexName
    }).then(result =>{
     console.log(result);
     return res.json({result});
    }).catch(error=>{
      console.log(error);
      res.send(error);x
    })
     
     
     
  }

  exports.deleteIndex = function(req, res){
    const indexName = req.params.index;
    esClient.indices.delete({
        index: indexName
    }).then(result =>{
     console.log(result);
     return res.json({result});
    }).catch(error=>{
      console.log(error);
      res.send(error);x
    })
     
     
     
  }




exports.getStatus = function(req, res){
    //const indexName = req.params.index;
    esClient.async_search.status({
      id: req.params.id  
    }).then(result =>{
     console.log(result);
     return res.send({result});
    }).catch(error=>{
      console.log(error);
      res.send(error);x
    })
     
     
     
  }


  
exports.getData = function(req, res){
  const indexName = req.params.index;
  esClient.search({
    index:indexName,
    body:{
      "from": 0,
      "size":100,
      query:{
        match_all:{ }
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