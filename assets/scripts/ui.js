const store = require('./store')

const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse is', signUpResponse)
  $('#sign-up-form').html('You have successfully registered.')
}

const signUpError = function (error) {
  console.log('Error in sign up is', error)
}

const signInSuccess = function (response) {
  console.log('response is', response)
  store.user = response.user
  $('#sign-in-form').html('You have successfully signed in.')
  $('#sign-in-button').toggle()
  $('#change-password-button').toggle()
  $('#sign-out-button').toggle()
  $('#register-button').toggle()
}

const signInError = function (error) {
  $('.failedSignIn').html('Your username or password is incorrect.')
  console.log('Error in sign in is', error)
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#change-password-form').html('You have successfully changed your password.')
}

const signOutSuccess = function (signOutResponse) {
  $('#sign-in-button').toggle()
  $('#change-password-button').toggle()
  $('#sign-out-button').toggle()
  $('#register-button').toggle()
  delete store.user
  delete store.game
  console.log(store.user)
}

const createGameSuccess = function (createGameResponse) {
  console.log('CreateGameResponseis', createGameResponse)
  store.game = createGameResponse.game
}

const createGameFail = function (error) {
  console.log('Create game error is' + error)
}

const updateGameSuccess = function (updateGameResponse) {
  console.log('UpdateGameResponseis', updateGameResponse)
  store.game = updateGameResponse.game
}

const updateGameFail = function (error) {
  console.log('Create game error is' + error)
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
  updateGameFail
}
