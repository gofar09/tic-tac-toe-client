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
  $('.game-box').on('click', events.changeTurn)
  $('#zero').on('click', events.clickDisplay)
  $('#one').on('click', events.clickDisplay)
  $('#two').on('click', events.clickDisplay)
  $('#three').on('click', events.clickDisplay)
  $('#four').on('click', events.clickDisplay)
  $('#five').on('click', events.clickDisplay)
  $('#six').on('click', events.clickDisplay)
  $('#seven').on('click', events.clickDisplay)
  $('#eight').on('click', events.clickDisplay)

  $('.new-game').on('click', events.boardReset)
})
