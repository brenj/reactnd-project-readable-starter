const clone = require('clone')
const config = require('./config')

let db = {}

const defaultData = {
  categories: [
    {
      name: 'csharp',
      path: 'csharp',
    },
    {
      name: 'go',
      path: 'go',
    },
    {
      name: 'java',
      path: 'java',
    },
    {
      name: 'javascript',
      path: 'javascript',
    },
    {
      name: 'perl',
      path: 'perl',
    },
    {
      name: 'php',
      path: 'php',
    },
    {
      name: 'python',
      path: 'python',
    },
    {
      name: 'ruby',
      path: 'ruby',
    },
    {
      name: 'sql',
      path: 'sql',
    },
  ]
}

function getData (token) {
  //Each token has it's own copy of the DB. The token in this case is like an app id.
  let data = db[token]
  //This populates the default user data if there isn't any in the db.
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getAll (token) {
  return new Promise((res) => {
    res(getData(token))
  })
}

module.exports = {
  getAll
}
