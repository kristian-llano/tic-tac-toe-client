
const store = require('./../store')

const onSignUpSuccess = function (responseData) {
  $('#sign-up-message').text('Account successfully created!')
  setTimeout(function () {
    $('#sign-in-message').fadeOut('slow')
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
  $('#sign-out').show()
  $('#play-new-game').show()
}

const onSignOutSuccess = function (responseData) {
  store.user = null
  $('#sign-out-message').text('Successfully logged out!')
  setTimeout(function () {
    $('#sign-out-message').fadeOut('slow')
  }, 2000)
  $('form').trigger('reset')
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#play-new-game').hide()
}

const onPlayNewGameSuccess = function (event) {
  $('#play-new-game').hide()
}

const onError = function (err) {
  console.error(err)
  $('#error-message').text('Something went wrong, please try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onPlayNewGameSuccess,
  onError
}
