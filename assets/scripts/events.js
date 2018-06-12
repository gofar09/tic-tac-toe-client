
const authApi = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const gameLogic = [null, null, null, null, null, null, null, null, null]

const ids = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']

let over = false

let indexExport = null
// Boolean bang to switch x to o and back
let xoSwapper = true
const changeTurn = () => {
  xoSwapper = !xoSwapper
  // console.log('swapper is' + xoSwapper)
}

let xoExport = 0

// Checks swapper to see if x or o should be displayed
const which = () => {
  if (xoSwapper === true) {
    xoExport = 'x'
    return 'X'
  } else {
    xoExport = 'o'
    return 'O'
  }
}

// Changes array value to x or o based on input from which function. does this
// by look at id of clicked div, checking it against id array and getting the index,
// then uses that to indicate the id in gameLogic index which will receive x or o
const xoPush = (id) => {
  indexExport = ids.indexOf(id)
  gameLogic[Number(indexExport)] = which()
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

let moveCounter = 0

// Resets gameLogic and redraws board on new game click
const boardReset = function () {
  for (let i = 0; i < gameLogic.length; i++) {
    gameLogic[i] = null
    // console.log(gameLogic)
    xoSwapper = true
    moveCounter = 0
    over = false
    $('#winDisplay').text('')
    boardWrite()
  }
}

// Win combos
const wins = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8], [1, 4, 7]]

// Checks gameLogic array for win combo matches and logs a win message
const checker = (wins) => {
  const holder = [gameLogic[wins[0]], gameLogic[wins[1]], gameLogic[wins[2]]]
  if (holder.every((value) => value === 'X')) {
    $('#winDisplay').text('X wins!')
    over = true
  } else if (holder.every((value) => value === 'O')) {
    $('#winDisplay').text('O Wins!')
    over = true
  }
}

// Determines if games are a draw
const draw = () => {
  if ((over !== true) && (moveCounter === 9)) {
    $('#winDisplay').text('Draw Game.')
  }
}

// Loops through win array, then loops through win condition sub-arrays
const winCheck = function () {
  for (let j = 0; j < wins.length; j++) {
    checker(wins[j])
    draw()
  }
}
// Initial function run on board click, checks if game is over and if so prevents
// input. Then, checks gameLogic array for previous input then changes
// turn, initializes board determination, and draws board.
const clickDisplay = function () {
  if (over === true) {
    $('#winDisplay').text('The game is over. Click New Game to play again.')
  } else if (xoCheck($(this).attr('id')) === null) {
    xoPush($(this).attr('id'))
    boardWrite()
    $('#winDisplay').text('')
    moveCounter += 1
    winCheck()
    onUpdateGame()
    changeTurn()
  } else if (over === false) {
    $('#winDisplay').text('That space has already been played.')
  }
}

// API events below
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

const onCreateGame = function (event) {
  event.preventDefault()
  authApi.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFail)
}

const onUpdateGame = function () {
  const gameData = {
    'game': {
      'cell': {
        'index': indexExport,
        'value': xoExport
      },
      'over': over
    }
  }
  authApi.updateGame(gameData)
    .then(ui.updateGameSuccess)
    .catch(ui.createGameFail)
}

module.exports = {
  changeTurn,
  clickDisplay,
  boardReset,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame,
  onUpdateGame,
  over,
  which,
  indexExport
}
