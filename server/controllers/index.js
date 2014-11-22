var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req,res) {
      var callback = function(data){
        //send res after attaching data
        console.log(data);
        res.status(200)
          .send(data);
      }
      models.messages.get(callback);

    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

