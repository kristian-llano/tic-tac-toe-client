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
  const clickedCellData = {
    game: {
      cell: {
        index: $(event.target).attr('data-cell-index'),
        value: currentPlayer
      },
      over: store.game.over
    }
  }
  const id = store.game._id
  if (store.game.cells[0] === '' && store.game.cells[1] === '' && store.game.cells[2] === '') {
    $('.player-1-turn-message').text('Player 1 wins!')
    console.log(store.game)
  }
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
  api.clickOnCell(id, clickedCellData)
    .then(ui.onClickCellSuccess)
    .catch(ui.onError)
}

// const onGameOver = function () {
//   if (store.game.cells.index[0] === 'X' && store.game.cells.index[1] === 'X' && store.game.cells.index[2] === 'X') {
//     $('.player-1-turn-message').text('Player 1 wins!')
//   } else if (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') {
//     $('.player-1-turn-message').text('Player 1 wins!')
//   }
// }

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onPlayNewGame,
  onClickCell
}
