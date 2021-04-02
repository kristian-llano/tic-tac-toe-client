#!/bin/#!/usr/bin/env bash

curl  --include "https://tic-tac-toe-api-development.herokuapp.com/games/:${ID}" \
  --request PATCH  \
  --header "Content-Type: application/json"\
  --header "Authorization: Bearer ${TOKEN}"

echo
