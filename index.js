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
  $('#sign-up-form').on('submit', events.onSignUp)

  $('#sign-in-form').on('submit', events.onSignIn)

  $('#change-password-form').on('submit', events.onChangePassword)

  $('#sign-out-button').click(events.onSignOut)

  $('.create-game').on('click', events.onCreateGame)
  $('.create-game').on('click', events.onGetGames)
  $('.create-game').on('click', events.secret)

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
  $('.new-game').on('click', events.onCreateGame)
  $('.new-game').on('click', events.onGetGames)
})
