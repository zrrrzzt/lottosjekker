'use strict';

function fixDate(date){
  var dateArr = date.split(',')
    , newDate
    ;

  newDate = dateArr[2] + '.' + dateArr[1] + '.' + dateArr[0];
  return newDate;
}

module.exports = fixDate;