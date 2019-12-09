const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// setup connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'db_table'
});

//create table
router.get('/createTable', (req, res) => {
  const sql = 'CREATE TABLE to_do(id int not null auto_increment, tasks varchar(255), primary key(id))';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Insert Data
router.post('/addTask', (req, res) => {
  let tasks = req.body.tasks;
  let values = [tasks];
  let sql = `INSERT INTO to_do (tasks) VALUES (?)`;
  db.query(sql, values, function(err, results) {
    if(err) throw err;
    res.json(results);
  })
});


// get tasks
router.get('/getTasks', (req, res) => {
  let sql = 'SELECT * from to_do';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// delete task
router.delete('/deleteTask/:id', (req, res) => {
  let sql = `DELETE from to_do WHERE id=${req.params.id}`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;
