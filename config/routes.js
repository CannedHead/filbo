
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var optionController = require('../controllers/optionController');


module.exports = function (app, io) {

  app.get('/', function(req, res) {
    optionController.readOptionsCallback(function(err,options){
      res.render('index2', {
          options: options
      });   
    }); 
  });

  app.get('/vuelvevivienda', function(req, res) {
    optionController.readOptionsCallback(function(err,options){
      res.render('vivienda', {
          options: options
      });   
    }); 
  });

  app.get('/vias', function(req, res) {
    optionController.readOptionsCallback(function(err,options){
      res.render('vias', {
          options: options
      });   
    }); 
  });

  app.get('/derechoavivirsinmiedo', function(req, res) {
    optionController.readOptionsCallback(function(err,options){
      res.render('derechoavivirsinmiedo', {
          options: options
      });   
    }); 
  });

  app.get('/saludprioridad', function(req, res) {
    optionController.readOptionsCallback(function(err,options){
      res.render('saludprioridad', {
          options: options
      });   
    }); 
  });
  
  app.get('/parquesycanchas', function(req, res) {
    optionController.readOptionsCallback(function(err,options){
      res.render('parquesycanchas', {
          options: options
      });   
    }); 
  });
 
  app.get('/circuitoverde', function(req, res) {
    optionController.readOptionsCallback(function(err,options){
      res.render('circuitoverde', {
          options: options
      });   
    }); 
  });
  /*
  app.get('/ciudadeducadora', function(req, res) {
    optionController.readOptionsCallback(function(err,options){
      res.render('ciudadeducadora', {
          options: options
      });   
    }); 
  });

  app.get('/metro', function(req, res) {
    optionController.readOptionsCallback(function(err,options){
      res.render('metro', {
          options: options
      });   
    }); 
  });*/

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
