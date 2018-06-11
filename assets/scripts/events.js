
const authApi = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const gameLogic = [null, null, null, null, null, null, null, null, null]

const ids = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']

// Boolean bang to switch x to o and back
let xoSwapper = true
const changeTurn = () => {
  xoSwapper = !xoSwapper
  // console.log('swapper is' + xoSwapper)
}

// Checks swapper to see if x or o should be displayed
const which = () => {
  if (xoSwapper === true) {
    console.log(gameLogic)
    return 'X'
  } else {
    return 'O'
  }
}

// Changes array value to x or o based on input from which function. does this
// by look at id of clicked div, checking it against id array and getting the index,
// then uses that to indicate the id in gameLogic index which will receive x or o
const xoPush = (id) => {
  const holder = ids.indexOf(id)
  gameLogic[Number(holder)] = which()
}

// Function for checking if square was already clicked
const xoCheck = (id) => {
  const holder = ids.indexOf(id)
  return gameLogic[Number(holder)]
}

// Draws game board based on GameLogic array values
const boardWrite = () => {
  $('#zero').text(gameLogic[0])
  $('#one').text(gameLogic[1])
  $('#two').text(gameLogic[2])
  $('#three').text(gameLogic[3])
  $('#four').text(gameLogic[4])
  $('#five').text(gameLogic[5])
  $('#six').text(gameLogic[6])
  $('#seven').text(gameLogic[7])
  $('#eight').text(gameLogic[8])
}

// Resets gameLogic and redraws board on new game click
const boardReset = function () {
  for (let i = 0; i < gameLogic.length; i++) {
    gameLogic[i] = null
    // console.log(gameLogic)
    boardWrite()
    xoSwapper = true
  }
}

// Win combos
const wins = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8], [1, 4, 7]]

// Checks gameLogic array for win combo matches and logs a win message
const checker = (wins) => {
  const holder = [gameLogic[wins[0]], gameLogic[wins[1]], gameLogic[wins[2]]]
  if (holder.every((value) => value === 'X')) {
    return console.log('X Wins!')
  } else if (holder.every((value) => value === 'O')) {
    return console.log('O Wins!')
  }
}
//   } else if (gameLogic.every()) {}
// }
  // console.log('WinIndex is' + winIndex)
  // const holder = [gameLogic[wins[j][0]], gameLogic[wins[j][1]], gameLogic[wins[j][2]]]
  // if (holder.every((value) => value === 'X')) {
  //   return console.log('X Wins!')
  // } else if (holder.every((value) => value === 'O')) {
  //   return console.log('O Wins!')
  // }


// Loops through win array, then loops through win condition sub-arrays
const winCheck = function () {
  // for (let i = 0; i < wins.length; i++) {
  for (let j = 0; j < wins.length; j++) {
    checker(wins[j])
    console.log(gameLogic)
  }
}
// }

// Initial function run on board click, checks gameLogic array for previous input then changes
// turn, initializes board determination, then draws board.
const clickDisplay = function () {
  if (xoCheck($(this).attr('id')) === null) {
    xoPush($(this).attr('id'))
    boardWrite()
    winCheck()
    changeTurn()
  } else {
    console.log('Stop that.')
  }
}

// Auth events below

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is', data)
  authApi.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is', data)
  authApi.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('in chng pword data is', data)
  authApi.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

module.exports = {
  changeTurn,
  clickDisplay,
  boardReset,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
