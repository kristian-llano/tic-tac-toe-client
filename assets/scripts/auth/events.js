
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

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

const onClickCell = function (event) {
  event.preventDefault()
  const id = $(user.game._id).data('id')
  const index = 'data-cell-index'
  const value = ['x', 'o']
  api.clickOnCell(index, value, id)
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
