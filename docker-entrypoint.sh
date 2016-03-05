#!/bin/bash

if [[ $# -eq 0 ]]; then
  exec node index.js
else
  exit 0
fi
