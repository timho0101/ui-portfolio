const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'db_table'
});

// Create Table
router.get('/createTable', (req, res, next) => {
  let sql = 'CREATE TABLE to_do(id int not null auto_increment, tasks varchar(255), primary key(id))';
  db.query(sql, function(err, results) {
    if(err) throw err;
    res.json(results);
  })
})
/*---------------------------User Data Table API-------------------------------------------------------- */
// Insert Data
router.post('/addData', (req, res) => {
  let fName = req.body.fName;
  let lName = req.body.lName;
  let phoneNum = req.body.phoneNum;
  let values = [fName, lName, phoneNum];
  let sql = `INSERT INTO tim_form_table (fName, lName, phoneNum) VALUES (?,?,?)`;
  db.query(sql, values, function(err, results) {
    if(err) throw err;
    res.json(results);
  })
});

// Get Data
router.get('/getData', (req, res) => {
  let sql = 'SELECT * from tim_form_table';
  db.query(sql, function(err, results) {
    if(err) throw err;
    res.json(results);
  });
});

// Get Data by ID
router.get('/getData/:id', (req, res) => {
  let sql = `SELECT * FROM tim_form_table WHERE id = ${req.params.id}`;
  db.query(sql, function(err, results) {
    if(err) throw err;
    res.json(results);
  })
});

// Update Data by ID
router.put('/updateData/:id', (req, res) => {
  let sql = `UPDATE tim_form_table SET fName =
  '${req.body.fName}', lName = '${req.body.lName}', phoneNum = '${req.body.phoneNum}' WHERE id = ${req.params.id}`;
  db.query(sql, function(err, results) {
    if(err) throw err;
    res.json(results);
  })
});

// Delete Data by ID
router.delete('/deleteData/:id', (req, res) => {
  let sql = `DELETE from tim_form_table WHERE id = ${req.params.id}`;
  db.query(sql, function(err, results) {
    if(err) throw err;
    res.json(results);
  })
});

/*-----------------------User login/register API---------------------------------*/
// Get username and password
router.get('/login', (req, res) => {
  let sql = 'SELECT * from tim_user_register_table';
  db.query(sql, function(err, results) {
    if(err) throw err;
    res.json(results);
  });
});

// Register username and password
router.post('/register', (req, res) => {
  let fName = req.body.fName;
  let lName = req.body.lName;
  let userName = req.body.userName;
  let password = req.body.password;
  let values = [fName, lName, userName, password];
  let sql = `INSERT INTO tim_user_register_table (fName, lName, userName,password) VALUES (?,?,?,?)`;
  db.query(sql, values, function(err, results) {
    if(err) throw err;
    res.json(results);
  })
});

// Delete Data by ID
router.delete('/deleteUser/:id', (req, res) => {
  let sql = `DELETE from tim_user_register_table  WHERE id = ${req.params.id}`;
  db.query(sql, function(err, results) {
    if(err) throw err;
    res.json(results);
  })
});


module.exports = router;
