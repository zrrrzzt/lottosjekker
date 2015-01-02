'use strict';

var intersections = require('lodash-node/modern/arrays/intersection')
  , fixDate = require('./lib/fixdate')
  , output = []
  ;

function checkResults(opts, callback){

  if(!opts || !callback){
    return callback(new Error('Missing required input. Both opts and callback is required.'), null);
  }

  if(!opts.result){
    return callback(new Error('Missing required param: opts.result'), null);
  }

  if(!opts.rows){
    return callback(new Error('Missing required param: opts.rows'), null);
  }

  if(!Array.isArray(opts.rows)){
    return callback(new Error('Wrong input. opts.rows must be an array'), null);
  }

  output.push('Trekning ' + fixDate(opts.result.drawDate));
  opts.rows.forEach(function(row){
    output.push(intersections(opts.result.mainTable, row).length + ' rette og ' + intersections(opts.result.addTable, row).length + ' tilleggstall');
  });

  return callback(null, output.join('\n'));
}

module.exports = checkResults;