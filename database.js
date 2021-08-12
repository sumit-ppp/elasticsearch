const elasticSearch = require('elasticsearch');

const esClient = new elasticSearch.Client({
    host: '127.0.0.1:9200',
    log: 'error'
  });

  module.exports = esClient;