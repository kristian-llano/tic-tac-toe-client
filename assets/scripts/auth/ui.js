
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
}

const onPlayNewGameSuccess = function (responseData) {
  console.log(responseData)
  store.game = responseData.game
  $('#play-new-game').hide()
  $('#game').show()
  $('#player-one').show()
}

const onClickCellSuccess = function (response) {
  if (store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') {
    store.game.over = true
  } else if (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') {
    store.game.over = true
  } else if (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') {
    store.game.over = true
  } else if (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') {
    store.game.over = true
  } else if (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') {
    store.game.over = true
  } else if (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') {
    store.game.over = true
  } else if (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') {
    store.game.over = true
  } else if (store.game.cells[2] === 'X' && store.game.cells[4] === 'X' && store.game.cells[6] === 'X') {
    store.game.over = true
  } else if (store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') {
    store.game.over = true
  } else if (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') {
    store.game.over = true
  } else if (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') {
    store.game.over = true
  } else if (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') {
    store.game.over = true
  } else if (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') {
    store.game.over = true
  } else if (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') {
    store.game.over = true
  } else if (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') {
    store.game.over = true
  } else if (store.game.cells[2] === 'O' && store.game.cells[4] === 'O' && store.game.cells[6] === 'O') {
    store.game.over = true
  }
  if (store.game.over === true) {
    $('.player-1-turn-message').text(' wins!')
    $('.play-again').show()
  // } else if (store.game.over === true) {
  //   $('.player-1-turn-message').text(' wins!')
  //   $('.play-again').show()
  }
  store.game = response.game
  setTimeout(function () {
    $('#space-taken-message').fadeOut('slow')
  }, 3500)
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
  onError
}
