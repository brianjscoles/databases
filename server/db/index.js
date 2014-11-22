var mysql = require('mysql');
var _ = require('underscore');

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
var postTemplate = _.template("INSERT into messages (username, roomname, text) values ('<%- username %>', '<%- roomname %>', '<%- text %>');")


var allMessagesQuery = "select * from messages";

exports.getMessages = function (callback, filter) {
  chatsDb.query(allMessagesQuery, function(err, messages){
    if (err) {
      throw err;
    }
    callback ? callback(messages) : console.log('callback missing', messages);
  });
};

exports.postMessage = function (message, callback) {
  var queryString = postTemplate(message);
  chatsDb.query(queryString, function(err, response){
    if (err){
      throw err;
    }
    console.log(response);
    callback ? callback() : console.log("POST callback missing");
  });

}



// INSERT into messages (username, roomname, text)
// values ('brian', 'lobby', 'hello again');
