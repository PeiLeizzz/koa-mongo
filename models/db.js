const MongoClient = require('mongoDB').MongoClient;
const uri = "mongodb://localhost:27017/testDB";
const client = new MongoClient(uri, { useUnifiedTopology: true });

client.connect((err, client) => {
    console.log('Connect Database!')
    // perform actions on the collection object
});

module.exports = client