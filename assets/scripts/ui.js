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
}

const signInError = function (error) {
  console.log('Error in sign in is', error)
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#change-password-form').html('You have successfully changed your password.')
}

const signOutSuccess = function (signOutResponse) {
  $('#sign-out-button').html('You have successfully signed out.')
  delete store.user
  console.log(store.user)
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  signOutSuccess
}
