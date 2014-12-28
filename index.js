'use strict';

var ntr = require('norsk-tipping-results')
  , cr = require('./lib/checkResults')
  , myRows = require('./myrows')
  , opts = {
      type : 'lotto'
    }
  ;

ntr(opts, function (err, json) {
  if(err){
    console.error(err);
  } else {
    cr({result:json, rows:myRows}, function(error, data){
      if(error){
        console.log(error);
      } else {
        console.log(data);
      }
    });
  }
});