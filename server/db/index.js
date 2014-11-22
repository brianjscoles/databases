var mysql = require('mysql');

var chatsDb = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat'
});
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

chatsDb.connect();

var allMessagesQuery = "select * from messages";

exports.getMessages = function (callback, filter) {
  chatsDb.query(allMessagesQuery, function(err, messages){
    if (err) {
      throw err;
    }
    callback ? callback(messages) : console.log('callback missing', messages);
  });
};
