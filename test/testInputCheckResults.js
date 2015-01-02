'use strict';

var assert = require('assert')
  , chkr = require('../index')
  ;

describe('lottosjekker - inputs', function(){

  it('requires opts and callback to be supplied', function(done){

    var opts = false;

    chkr(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required input. Both opts and callback is required./.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });


  it('requires opts.result to exist', function(done){

    var opts = {
          result: false,
          rows: true
        };

    chkr(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: opts.result/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

  it('requires opts.rows to exist', function(done){

    var opts = {
          result:true,
          rows:false
        };

    chkr(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: opts.rows/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

  it('requires opts.rows to be an array', function(done){

    var opts = {
      result:true,
      rows:true
    };

    chkr(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Wrong input. opts.rows must be an array/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

});