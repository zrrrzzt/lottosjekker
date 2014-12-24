'use strict';

var https = require('https')
  , intersections = require('lodash-node/modern/arrays/intersection')
  , resultUrl = 'https://www.norsk-tipping.no/api-lotto/getResultInfo.json?gameID=1&winnerDetails=true'
  , myRows = [
      [2, 11, 24, 26, 27, 29, 30],
      [3, 4, 6, 16, 24, 27, 29],
      [6, 7, 11, 13, 16, 17, 27],
      [1, 7, 8, 15, 16, 19, 28],
      [5, 10, 13, 16, 17, 25, 32],
      [2, 5, 10, 12, 15, 19, 27],
      [17, 23, 24, 25, 27, 28, 34],
      [1, 10, 13, 14, 15, 27, 28],
      [3, 10, 16, 17, 22, 29, 34],
      [6, 7, 10, 13, 16, 23, 33]
    ]
  ;

function fixDate(date){
  var dateArr = date.split(',')
    , newDate = ''
    ;
  newDate = dateArr[2] + '.' + dateArr[1] + '.' + dateArr[0];
  return newDate;
}

function handleData(inp){
  var data = inp.toString()
    , json
    ;
  data = data.replace('while(true);/* 0;', '');
  data = data.replace('/* */', '');
  json = JSON.parse(data);
  console.log('Trekning ' + fixDate(json.drawDate));
  myRows.forEach(function(row){
    console.log(intersections(json.mainTable, row).length + ' rette og ' + intersections(json.addTable, row).length + ' tilleggstall');
  })
}

https.get(resultUrl, function(res){

  res.on('data', handleData);

}).on('error', function(e) {
  console.error(e);
});