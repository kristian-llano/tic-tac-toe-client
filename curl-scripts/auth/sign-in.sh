##!/bin/bash

curl "https://tic-tac-toe-api-development.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "username": "'"${USERNAME}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
