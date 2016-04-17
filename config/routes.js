
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var optionController = require('../controllers/optionController');


module.exports = function (app, io) {

  app.get('/', function(req, res) {
    optionController.readOptionsCallback(function(err,options){
      res.render('index', {
          options: options
      });   
    }); 
  });

  app.get('/test', function(req, res) {
    optionController.readOptionsCallback(function(err,options){
      res.render('index2', {
          options: options
      });   
    }); 
  });
  
  app.get('/options', optionController.readOptions);
  app.post('/option', optionController.createOption);
  app.post('/option/:id', optionController.increaseOption(io));
  
  /**
   * Error handling
   */

  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};
