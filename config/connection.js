const mysql = require('mysql')

// Connect to DB data
const connection = mysql.createPool({
  host: 'us-cdbr-east-04.cleardb.com',
  user: 'bbe57833499def',
  password: '674f257d',
  database: 'heroku_1cb279cfe07419a'
})

connection.getConnection((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Connection Established.')
  }
})

module.exports = connection