'use strict'

const intersections = require('lodash.intersection')
const fixDate = require('./lib/fixdate')

module.exports = (opts, callback) => {
  if (!opts || !callback) {
    return callback(new Error('Missing required input. Both opts and callback is required.'), null)
  }

  if (!opts.result) {
    return callback(new Error('Missing required param: opts.result'), null)
  }

  if (!opts.rows) {
    return callback(new Error('Missing required param: opts.rows'), null)
  }

  if (!Array.isArray(opts.rows)) {
    return callback(new Error('Wrong input. opts.rows must be an array'), null)
  }

  let output = []
  output.push('Trekning ' + fixDate(opts.result.drawDate))
  opts.rows.forEach(row => {
    output.push(intersections(opts.result.mainTable, row).length + ' rette og ' + intersections(opts.result.addTable, row).length + ' tilleggstall')
  })

  return callback(null, output.join('\n'))
}
