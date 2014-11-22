var db = require('../db');




module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      db.getMessages(callback);
    },
    post: function (message,callback) {
      db.postMessage(message,callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

