
const authApi = require('./api')
const ui = require('./ui')

let gameLogic = [null, null, null, null, null, null, null, null, null]

const boardReset = function (arr) {
  for (let i = 0; i < gameLogic.length; i++) {
    arr[i] = null
  }
}

let xOrO = true
// console.log(xOrO)
const changeTurn = function () {
  xOrO = !xOrO
  console.log(xOrO)
}

const clickDisplay = function () {
  gameLogic[i] = xOrO
}

const test = function () {
  console.log('test successful')
}

module.exports = {
  changeTurn,
  test
}
