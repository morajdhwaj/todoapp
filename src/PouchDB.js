const PouchDB = require("pouchdb");
const pouchdb = PouchDB.default.defaults();
const db = new pouchdb("mypouchdb");
db.info().then((info) => {});

db.allDocs(function (err, docs) {
  
});

export function insertToDB(data) {
  return db
    .post(data)
    .then((response) => {
      return response;
    })
    .catch((error) => {});
}

export function removeToDB(id) {
  db.get(id)
    .then((doc) => {
      return db.remove(doc);
    })
    .catch((err) => {
      console.error(err, "remove err");
    });
}
