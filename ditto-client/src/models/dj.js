/**
 * Handles local storage of values in the Ditto databse and other client 
 * related values that need persistent storage.
 */

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('ditto.db');

db.serialize(() => {
    db.run("CREATE TABLE prompts (info TEXT)");

    const statement = db.prepare("INSERT INTO lorem VALUES (?)");
    statement.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
        console.log(row.id + ": " + row.info);
    });
});

db.close();
