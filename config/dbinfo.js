// Database configuration
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'jokesdb.cp8c0ikyo2j6.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'AWSkarla33',
  database: 'jokesdb'
});

db.connect((error) => {
  if (error) {
    console.error('Database connection error:', error);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = db;