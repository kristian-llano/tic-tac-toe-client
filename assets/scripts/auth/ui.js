
const store = require('./../store')

const onSignUpSuccess = function (responseData) {
  $('#sign-up-message').text('Account successfully created!')
  setTimeout(function () {
    $('#sign-up-message').fadeOut('slow')
  }, 2000)
  $('form').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  store.user = responseData.user
  $('#sign-in-message').text('Successfully logged in!')
  setTimeout(function () {
    $('#sign-in-message').fadeOut('slow')
  }, 2000)
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
  }, 2000)
  $('form').trigger('reset')
  $('.sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#play-new-game').hide()
  $('#game').hide()
  $('#player-one').hide()
}

const onPlayNewGameSuccess = function (responseData) {
  console.log(responseData)
  store.game = responseData.game
  $('#play-new-game').hide()
  $('#game').show()
  $('#player-one').show()
}

let currentPlayer = 'X'
const onClickCellSuccess = function (event) {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  if (currentPlayer === 'X') {
    $('.player-1-turn-message').text('Player 1\'s turn!')
  } else if (currentPlayer === 'O') {
    $('.player-1-turn-message').text('Player 2\'s turn!')
  }
}

const onError = function (err) {
  console.error(err)
  $('#error-message').text('Something went wrong, please try again.')
  setTimeout(function () {
    $('#space-taken-message').fadeOut('slow')
  }, 2000)
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onPlayNewGameSuccess,
  onClickCellSuccess,
  onError
}
