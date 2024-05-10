const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const config ={
    host: 'db',
    user: 'root',
    password:'root',
    database:'nodedb'
};

const connection = mysql.createConnection(config);

connection.connect();


app.get('/', (req, res) => {
    const name = `User_${new Date().getTime()}`;
    connection.query(`INSERT INTO people (name) VALUES ('${name}')`, (err, results) => {
      if (err) throw err;
      connection.query('SELECT name FROM people', (err, results) => {
        if (err) throw err;
        res.send('<h1>Full Cycle Rocks!</h1>' + results.map(row => `<p>${row.name}</p>`).join(''));
      });
    });
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });