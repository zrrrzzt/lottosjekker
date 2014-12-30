'use strict';

var fs = require('fs')
  , assert = require('assert')
  , chkr = require('../lib/checkResults')
  , results = JSON.parse(fs.readFileSync('test/results.json').toString())
  , myrows = require('../myrows')
  , output = fs.readFileSync('test/output.txt').toString()
  ;

describe('lottosjekker - output', function(){

  it('has expected output', function(done){

    var opts = {
      result: results,
      rows: myrows
    };

    chkr(opts, function(err, data){
      assert.equal(data, output);
      done();
    });
  });

});