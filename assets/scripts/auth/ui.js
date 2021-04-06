
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
  $('.play-again').hide()
}

const onClickCellSuccess = function (event) {
  setTimeout(function () {
    $('#space-taken-message').fadeOut('slow')
  }, 3500)
}

const onGameOverSuccess = function (responseData) {
  $('.play-again').show()
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
  onGameOverSuccess,
  onError
}
