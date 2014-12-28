'use strict';

var intersections = require('lodash-node/modern/arrays/intersection')
  , fixDate = require('./fixdate')
  , output = ''
  ;

/**
 *
 * @param opts.result
 * @param opts.rows
 * @param callback
 */
function checkResults(opts, callback){
  output += 'Trekning ' + fixDate(opts.result.drawDate) + '\n';
  opts.rows.forEach(function(row){
    output += intersections(opts.result.mainTable, row).length + ' rette og ' + intersections(opts.result.addTable, row).length + ' tilleggstall' + '\n';
  });

  return callback(null, output);
}

module.exports = checkResults;