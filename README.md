#lottosjekker

Node modul for å se hvor mange rette man har i lotto

```
'use strict';

var ntr = require('norsk-tipping-results')
  , chkr = require('lottosjekker')
  , rows = [
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
  , ntrOpts = {
    type : 'lotto'
  }
  ;

function checkResults(err, result){
  if(err){
    console.error(err);
  } else {
    chkr({result:result, rows:rows}, function(error, data){
      if(error){
        console.log(error);
      } else {
        console.log(data);
      }
    });
  }
}

ntr(ntrOpts, checkResults);
```
