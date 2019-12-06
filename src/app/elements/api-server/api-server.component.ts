import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-server',
  templateUrl: './api-server.component.html',
  styleUrls: ['./api-server.component.scss']
})
export class ApiServerComponent implements OnInit {

  public urlencoded = `
    app.use(bodyParser.urlencoded({extended: false}));
  `;

  public startServer = `
    app.listen(port, ()=> {
      console.log('server start on port ' + port);
    })
  `;

  public createConnection = `
    const db = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'db_table'
    });
  `;

  public createTable = `
    router.get('/createTable', (req, res, next) => {
      let sql = 'CREATE TABLE tim_user_register_table(id int not null auto_increment, fName varchar(255), lName varchar(255), userName varchar(255), password varchar(255), primary key(id))';
      db.query(sql, function(err, results) {
        if(err) throw err;
        res.json(results);
      })
    })
  `;
  ngOnInit() {
  }

}
