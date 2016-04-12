var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moment = require('moment');
moment.locale('es');

// -----------------------------------------------------------------
// Schema
// -----------------------------------------------------------------

var OptionSchema = new Schema({
    
    id : {type: String, required: true},
    name: {type: String, required: true},
    count: {type: Number, default:0}, 
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now}   
        
});

// -----------------------------------------------------------------
// Virtuals
// -----------------------------------------------------------------

OptionSchema.virtual('current_date').get(function () {
  return moment(this.date).format('YYYY-MM-DD, h:mm a');
});

module.exports = mongoose.model('Option', OptionSchema);
