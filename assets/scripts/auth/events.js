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
        index: 'data-cell-index',
        value: currentPlayer
      },
      over: store.game.over
    }
  }
  const id = store.game._id
  if (value === 'X' || value === 'O') {
    $('#space-taken-message').text('That space is taken!')
  } else if (currentPlayer === 'X') {
    cell.css('background', 'green').text('X')
  } else {
    cell.css('background', 'red').text('O')
  } if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  api.clickOnCell(id, formData)
    .then(ui.onClickCellSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onPlayNewGame,
  onClickCell
}
