'use strict';

var https = require('https')
  , intersections = require('lodash-node/modern/arrays/intersection')
  , ntr = require('norsk-tipping-results')
  , myRows = require('./myrows')
  , fixDate = require('./fixdate')
  , opts = {
      type : 'lotto'
    }
  ;

ntr(opts, function (err, json) {
  if(err){
    console.error(err);
  } else {
    console.log('Trekning ' + fixDate(json.drawDate));
    myRows.forEach(function(row){
      console.log(intersections(json.mainTable, row).length + ' rette og ' + intersections(json.addTable, row).length + ' tilleggstall');
    })
  }
});