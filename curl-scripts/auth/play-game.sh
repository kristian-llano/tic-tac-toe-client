##!/bin/bash

curl "https://tic-tac-toe-api-development.herokuapp.com/play-game" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"

echo
