
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
console.log('authEvents', authEvents)
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-out').hide()
  $('#play-new-game').hide()
  $('#game').hide()
  $('#player-one').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#play-new-game').on('click', authEvents.onPlayNewGame)
  $('#index').on('click', authEvents.onClickCell)
})
