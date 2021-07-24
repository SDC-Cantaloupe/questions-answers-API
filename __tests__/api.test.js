// const app = require('../servers/mongo/server-mongo.js');
// const supertest = require('supertest');
// const request = supertest(app);
// const mongoose = require("mongoose");
// const databaseName = "test";



// beforeAll(async () => {

//   const url = `mongodb://127.0.0.1/${databaseName}`;
//   await mongoose.connect(url, { useNewUrlParser: true });
// });

// afterAll(async () => {
//   //await dropAllCollections();
//   // Closes the Mongoose connection
//   await mongoose.connection.close();
// });

// it('Gets the test endpoint', async () => {
//   // Sends GET Request to /test endpoint
//   await request.post('/qa/questions').query({product_id: 1, name:'bob', email:'a', body:'hey'})

//   let test = await request.get('/qa/questions').query({product_id: 1})
//   console.log(test)
//   // ...

// })
