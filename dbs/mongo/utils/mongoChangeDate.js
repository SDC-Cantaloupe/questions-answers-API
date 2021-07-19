var db = connect('localhost/qa')
//var collection = db.getCollection('questions');
var collection = db.getCollection('answers')
var bulkOp = collection.initializeOrderedBulkOp();
var count = 0;

//for questions
// collection.find().forEach(function(doc) {
//     bulkOp.find({ '_id': doc._id }).updateOne({
//         '$set': { 'question_date': new Date(doc.question_date).toISOString() }
//     });
//     count++;
//     if(count % 100 === 0) {
//         // Execute per 100 operations and re-init
//         bulkOp.execute();
//         bulkOp = collection.initializeOrderedBulkOp();
//     }
// });

// Clean up queues
// if(count > 0) {
//     bulkOp.execute();
// }


//for answers

var collection = db.getCollection('answers')
var bulkOp = collection.initializeOrderedBulkOp();
var count = 0;

collection.find().forEach(function(doc) {
  bulkOp.find({ '_id': doc._id }).updateOne({
      '$set': { 'date': new Date(doc.date).toISOString() }
  });
  count++;
  if(count % 100 === 0) {
      // Execute per 100 operations and re-init
      bulkOp.execute();
      bulkOp = collection.initializeOrderedBulkOp();
  }
});

if(count > 0) {
    bulkOp.execute();
}

