
const authApi = require('./api')
const ui = require('./ui')

let gameLogic = [null, null, null, null, null, null, null, null, null]

let ids = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']

let letter = true
// console.log(letter)
const changeTurn = function () {
  letter = !letter
}

const which = () => {
  if (letter === true) {
    console.log(gameLogic)
    return 'X'
  } else {
    return 'O'
  }
}

const xoPush = (id) => {
  let holder = ids.indexOf(id)
  console.log('holder is' + holder)
  gameLogic[Number(holder)] = which()
  console.log(gameLogic)
}

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

const clickDisplay = function () {
  xoPush($(this).attr('id'))
  boardWrite()
}

const boardReset = function () {
  for (let i = 0; i < gameLogic.length; i++) {
    gameLogic[i] = null
    console.log(gameLogic)
    boardWrite()
  }
}

const test = function () {
  console.log($(this).attr('id'))
}

module.exports = {
  changeTurn,
  test,
  clickDisplay,
  boardReset
}
