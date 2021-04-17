
const store = require('./../store')

const onSignUpSuccess = function (responseData) {
  $('#sign-up-message').text('Account successfully created!')
  setTimeout(function () {
    $('#sign-up-message').fadeOut('slow')
  }, 3000)
  $('form').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  store.user = responseData.user
  $('#sign-in-message').text('Successfully logged in!')
  setTimeout(function () {
    $('#sign-in-message').fadeOut('slow')
  }, 3000)
  $('form').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.sign-out').show()
  $('#play-new-game').show()
}

const onSignOutSuccess = function (responseData) {
  store.user = null
  $('#sign-out-message').text('Successfully logged out!')
  setTimeout(function () {
    $('#sign-out-message').fadeOut('slow')
  }, 3000)
  $('form').trigger('reset')
  $('.sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#play-new-game').hide()
  $('#game').hide()
  $('#player-one').hide()
  $('#play-again').hide()
}

const onPlayNewGameSuccess = function (responseData) {
  console.log(responseData)
  store.game = responseData.game
  $('#play-new-game').hide()
  $('#game').show()
  $('#player-one').show()
  store.game.over = false
  $('.winner-message').hide()
  $('#player-one').show()
  $('.box').empty()
  $('.row').css('pointer-events', 'auto')
  $('#play-again').hide()
  $('.box').css('background-color', '')
}

let currentPlayer = 'X'
const onCheckWinnerSuccess = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  if (store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') {
    store.game.over = true
    currentPlayer = 'X'
  } else if (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') {
    store.game.over = true
    currentPlayer = 'X'
  } else if (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') {
    store.game.over = true
    currentPlayer = 'X'
  } else if (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') {
    store.game.over = true
    currentPlayer = 'X'
  } else if (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') {
    store.game.over = true
    currentPlayer = 'X'
  } else if (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') {
    store.game.over = true
    currentPlayer = 'X'
  } else if (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') {
    store.game.over = true
    currentPlayer = 'X'
  } else if (store.game.cells[2] === 'X' && store.game.cells[4] === 'X' && store.game.cells[6] === 'X') {
    store.game.over = true
    currentPlayer = 'X'
  } else if (store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') {
    store.game.over = true
    currentPlayer = 'O'
  } else if (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') {
    store.game.over = true
    currentPlayer = 'O'
  } else if (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') {
    store.game.over = true
    currentPlayer = 'O'
  } else if (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') {
    store.game.over = true
    currentPlayer = 'O'
  } else if (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') {
    store.game.over = true
    currentPlayer = 'O'
  } else if (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') {
    store.game.over = true
    currentPlayer = 'O'
  } else if (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') {
    store.game.over = true
    currentPlayer = 'O'
  } else if (store.game.cells[2] === 'O' && store.game.cells[4] === 'O' && store.game.cells[6] === 'O') {
    store.game.over = true
    currentPlayer = 'O'
  }
  if (store.game.over === true) {
    $('#player-one').hide()
    $('.winner-message').show()
    $('.winner-message').text(currentPlayer + ' wins!')
    $('.row').css('pointer-events', 'none')
    $('.row').css('background', 'transparent')
    $('#play-new-game').show()
  } else if (!store.game.cells.includes('')) {
    $('.winner-message').text('It\'s a tie!')
    $('#play-new-game').show()
  }
  setTimeout(function () {
    $('#space-taken-message').fadeOut('slow')
  }, 3500)
}

const onClickCellSuccess = function (response) {
  setTimeout(function () {
    $('#space-taken-message').fadeOut('slow')
  }, 3500)
  store.game = response.game
}

const onError = function (err) {
  console.error(err)
  $('#error-message').text('Something went wrong, please try again.')
  setTimeout(function () {
    $('#error-message').fadeOut('slow')
  }, 3000)
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onPlayNewGameSuccess,
  onClickCellSuccess,
  onCheckWinnerSuccess,
  onError
}
