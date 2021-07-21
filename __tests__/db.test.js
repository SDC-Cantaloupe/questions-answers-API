const mongoose = require('mongoose');
const {Questions} = require('../dbs/mongo/models.js');

const sampleData = {"question_id" : 1, "product_id" : 1, "question_body" : "What fabric is the top made of?", "question_date" : "2020-07-27T21:18:34.409Z", "asker_name" : "yankeelover", "asker_email" : "first.last@gmail.com", "reported" : 0, "question_helpfulness" : 1 }

describe('Question Model Test', () => {
  beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    });
  });

  afterAll(async () => {
    await mongoose.disconnect();
  })

  it('create & save user successfully', async () => {
    const validUser = new Questions(sampleData);
    const savedUser = await validUser.save();
    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedUser._id).toBeDefined();
    expect(savedUser.product_id).toBe(sampleData.product_id);
    expect(savedUser.question_body).toBe(sampleData.question_body);
    expect(savedUser.question_date).toBe(sampleData.question_date);
    expect(savedUser.asker_name).toBe(sampleData.asker_name);
    expect(savedUser.asker_email).toBe(sampleData.asker_email);
  });
})

