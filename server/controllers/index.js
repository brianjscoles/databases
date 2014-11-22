var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req,res) {
      models.messages.get( function(data){
        res.status(200)
          .send({results:data});
      });
    },
    post: function (req, res) {
      models.messages.post(req.body, function(){
        res.status(201).send();
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

