const store = require('./store')
// const authApi = require('./api')

const signUpSuccess = function (signUpResponse) {
  $('.failedSignUp').html('You have successfully registered.')
  $('#sign-up-form')[0].reset()
}

const signUpError = function () {
  $('.failedSignUp').html('Email unavailable or password mismatch.')
  $('#sign-up-form')[0].reset()
}

const signInSuccess = function (response) {
  store.user = response.user
  $('.failedSignIn').html('You have successfully signed in.')
  $('#sign-in-button').toggle()
  $('#change-password-button').toggle()
  $('#sign-out-button').toggle()
  $('#register-button').toggle()
  $('.button-height').delay(2000).fadeIn()
  $('.emailDisplay').html('Signed in as: ' + store.user.email)
  $('#sign-in-form')[0].reset()
  $('#sign-in-form').hide()
}

const signInError = function () {
  $('.failedSignIn').html('Username or password is incorrect.')
  $('#sign-in-form')[0].reset()
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('.failedChangePassword').html('You have successfully changed your password.')
  $('#change-password-form')[0].reset()
}

const changePasswordError = function () {
  $('.failedChangePassword').html('Password is incorrect.')
  $('#change-password-form')[0].reset()
}

const signOutSuccess = function (signOutResponse) {
  $('#sign-in-button').toggle()
  $('#change-password-button').toggle()
  $('#sign-out-button').toggle()
  $('#register-button').toggle()
  $('.emailDisplay').html('')
  $('.gamesCompleted').html('')
  $('.button-height').toggle()
  $('.hide-game').fadeOut()
  // CHANGES HERE
  $('.button-height').hide()
  $('#winDisplay').text('')
  $('.failedSignIn').html('')
  $('.failedChangePassword').html('')
  delete store.user
  delete store.game
  delete store.finishedGames
}

const createGameSuccess = function (createGameResponse) {
  store.game = createGameResponse.game
}

const createGameFail = function () {

}

const updateGameSuccess = function (updateGameResponse) {
  store.game = updateGameResponse.game
}

const updateGameFail = function () {
}

const getGamesSuccess = function (getGamesResponse) {
  store.playedGames = getGamesResponse
  $('.gamesCompleted').html('You have played ' + store.playedGames.games.length + ' games.')
}

const getGamesFail = function () {
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  signOutSuccess,
  createGameSuccess,
  createGameFail,
  updateGameSuccess,
  updateGameFail,
  getGamesSuccess,
  getGamesFail,
  changePasswordError
}
