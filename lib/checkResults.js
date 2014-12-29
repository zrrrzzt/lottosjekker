'use strict';

var intersections = require('lodash-node/modern/arrays/intersection')
  , fixDate = require('./fixdate')
  , output = []
  ;

/**
 *
 * @param opts.result
 * @param opts.rows
 * @param callback
 */
function checkResults(opts, callback){
  output.push('Trekning ' + fixDate(opts.result.drawDate));
  opts.rows.forEach(function(row){
    output.push(intersections(opts.result.mainTable, row).length + ' rette og ' + intersections(opts.result.addTable, row).length + ' tilleggstall');
  });

  return callback(null, output.join('\n'));
}

module.exports = checkResults;