const fs = require('fs')
const util = require('util')
const readDir = util.promisify(fs.readdir)
const path = require('path')
const mongoose = require('mongoose')

// Load seeds of all models
async function seedDatabase () {
  const dir = await readDir(__dirname)
  console.log('direcoty name', dir)
  const seedFiles = dir.filter(f => f.endsWith('.seed.js'))

  for (const file of seedFiles) {
    const fileName = file.split('.seed.js')[0]
    let modelName = '';

    if (fileName === 'questions') {
      modelName = 'Questions'
    } else if (fileName === 'answers') {
      modelName = 'Answers'
    } else if (fileName === 'photos') {
      modelName = 'Answer_Photos'
    } else {
      throw new Error(`Not a valid model name`)
    }
    const model = mongoose.models[modelName]

    if (!model) throw new Error(`Cannot find Model '${modelName}'`)
    const fileContents = require(path.join(__dirname, file))


  await model.insertMany(fileContents)
  }
}

exports.seedDatabase = seedDatabase