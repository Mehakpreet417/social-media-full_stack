import mysql from "mysql2"

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mehak@530",
  database: "social",
})

// Test the connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Successfully connected to MySQL database');
});

// Handle errors after initial connection
db.on('error', (err) => {
  console.error('MySQL connection error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.error('Database connection was closed.');
  }
  if (err.code === 'ER_CON_COUNT_ERROR') {
    console.error('Database has too many connections.');
  }
  if (err.code === 'ECONNREFUSED') {
    console.error('Database connection was refused.');
  }
});

// Handle process termination
process.on('SIGINT', () => {
  db.end((err) => {
    if (err) {
      console.error('Error closing MySQL connection:', err);
      return;
    }
    console.log('MySQL connection closed.');
    process.exit(0);
  });
});
