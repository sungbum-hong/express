const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://mkonji2030:Qja58246!!@sungbeom.nxpzqve.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
