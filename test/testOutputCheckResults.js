'use strict';

var fs = require('fs')
  , assert = require('assert')
  , chkr = require('../lib/checkResults')
  , results = JSON.parse(fs.readFileSync('results.json').toString())
  , output = fs.readFileSync('output.txt').toString()
  ;