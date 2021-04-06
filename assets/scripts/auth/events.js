const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('./../store')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

const onPlayNewGame = function (event) {
  event.preventDefault()
  api.playNewGame()
    .then(ui.onPlayNewGameSuccess)
    .catch(ui.onError)
}

let currentPlayer = 'X'
const onClickCell = function (event) {
  const cell = $(event.target)
  const value = cell.text()
  const formData = {
    game: {
      cell: {
        index: $(event.target).attr('data-cell-index'),
        value: currentPlayer
      },
      over: store.game.over
    }
  }
  const id = store.game._id
  if (value === 'X' || value === 'O') {
    $('#space-taken-message').text('That space is taken!')
    return
  } else if (currentPlayer === 'X') {
    cell.css('background', 'green').text('X')
    $('.player-1-turn-message').text('Player 2\'s turn!')
  } else if (currentPlayer === 'O') {
    cell.css('background', 'red').text('O')
    $('.player-1-turn-message').text('Player 1\'s turn!')
  } if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  api.clickOnCell(id, formData)
    .then(ui.onClickCellSuccess)
    .catch(ui.onError)
}

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

const isEqual = function () {
  if (winningCombos === store.game.cells) {
    $('.player-1-turn-message').text('')
  }
}
const onGameOver = function (event) {
  winningCombos.every(isEqual)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onPlayNewGame,
  onClickCell,
  onGameOver
}
