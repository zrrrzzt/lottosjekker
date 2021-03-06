[![Build Status](https://travis-ci.org/zrrrzzt/lottosjekker.svg?branch=master)](https://travis-ci.org/zrrrzzt/lottosjekker)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# lottosjekker

Node module for checking your results in the norwegian lottery (Lotto) from Norsk tipping.

## Usage

Pass in an options object.

**result** Result from a given draw.

**rows** An array of arrays with the number you will check.

```
'use strict'

const ntr = require('norsk-tipping-results')
const chkr = require('lottosjekker')
const rows = [
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

function checkResults (err, result) {
  if (err) {
    console.error(err)
  } else {
    chkr({result:result, rows:rows}, (error, data) => {
      if (error) {
        console.error(error)
      } else {
        console.log(data)
      }
    })
  }
}

ntr(ntrOpts, checkResults)
```

## License

[MIT](LICENSE)

![Robohash image of lottosjekker](https://robots.kebabstudios.party/lottosjekker.png "Robohash image of lottosjekker")
