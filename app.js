const express = require('express');
//const {buildSchema} = require('graphql');
const graphqlHTTP = require('express-graphql');
const schema = require('./src/schema');

let port = 3000;
const app = express();
app.use('/', graphqlHTTP({
    schema: schema,
    //rootValue: root,
    graphiql: true
}));

app.listen(port);
console.log('GQL API server running at localhost:' + port);