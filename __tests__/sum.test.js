const sum  = require('../sum.js');
const db = require('../dbs/mongo/queries/getQuestionData.js')

test('add 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
})