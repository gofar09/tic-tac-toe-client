'use strict'
// user require with a reference to bundle the file and use it in this file
// var example = require('./example');
// load manifests
// scripts
require('./assets/scripts/index.js')
const events = require('./assets/scripts/events.js')
// styles
require('./assets/styles/index.scss')

$(() => {
  $('.game-box').on('click', events.turn)
  $('#zero').on('click', events.test)
  $('#one').on('click', events.test)
  $('#two').on('click', events.test)
  $('#three').on('click', events.test)
  $('#four').on('click', events.test)
  $('#five').on('click', events.test)
  $('#six').on('click', events.test)
  $('#seven').on('click', events.test)
  $('#eight').on('click', events.test)
})
