var Opcion = require('../models/option');

module.exports = {

	createOption: function(req, res, next){
		
		if(!req.body.id){
			console.log(req.body.id);
			return res.status(404).json({error:true, message:'Id not found'});
		}
		if(!req.body.name){
			return res.status(404).json({error:true, message:'Name not found'});
		}

		Opcion.find({id:req.body.id}, function(err, opt){
			if(err){
				console.log('ERROR: ' + err);
		        return res.status(500).json({error:true, message:'Server connection error. Please try later'});
			}
			if(opt.length){
				return res.status(409).json({error:true, message:'Option id already exists'});
			} else {
				var newOption = new Opcion({
		            id:   req.body.id,
		            name: req.body.name,
		            count: req.body.count || 0
		        });

		        newOption.save(function(err,option){
		            if(!err) {
		                return res.status(200).json({error: false, message:'New option has been created', option:option});
		            } else {
		                console.log('ERROR: ' + err);
		                return res.status(500).json({error:true, message:'Server connection error. Please try later'});
		            }
		        });
			}
		});

		
	},

	readOptions: function(req, res, next){
        Opcion.find({},{ "_id": 0, "__v": 0 },function(err,options){
            if (err){
                console.log('ERROR: ' + err);
                return res.status(500).json({error:true, message:'Server connection error. Please try later'});
            } else {
                return res.status(200).json({error: false, options: options});
            }
        });
    }, 

    readOptionsCallback: function(callback){
        Opcion.find({},{ "_id": 0, "__v": 0 },function(err,options){
            if (err){
                console.log('ERROR: ' + err);
                callback(err,[]);
            } else {
                callback(null,options);
            }
        });
    }, 

	increaseOption: function(req, res, next){

		if(!req.params.id){
			console.log(req.params.id);
			return res.status(404).json({error:true, message:'Id not found'});
		}
		Opcion.findOne({id:req.params.id}, function(err, opt){
			if(err){
				console.log('ERROR: ' + err);
		        return res.status(500).json({error:true, message:'Server connection error. Please try later'});
			}
			if(!opt){				
				return res.status(404).json({error:true, message:'Option not found'});
			} else {

				opt.count = opt.count+1;
				opt.updated = Date.now();

				opt.save(function (err, o){
                  if(err){
                    console.log('ERROR: ' + err);
                    res.status(500).json({error: true, message:'Server connection error. Please try later'});       
                  } else {
                    res.status(200).json({error: false, message:'Option has been increased', option: o});
                  }               
                });
			}
		});
	}
}