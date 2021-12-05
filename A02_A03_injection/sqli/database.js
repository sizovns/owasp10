const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./db/test.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username text, 
            password text 
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO user (username, password) VALUES (?,?)";
          db.run(insert, ["admin", "flag{4dm1n_p4$$w0rd}"]);
          db.run(insert, ["test_user", "test_user_pass"]);
        }
      }
    );
  }
  console.log("Connected to the test database.");
});

export default db;
