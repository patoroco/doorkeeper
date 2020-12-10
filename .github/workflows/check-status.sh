#!/bin/bash
if [ -z "`git status --porcelain`" ]; then
  true
else
  echo "The following files appear as changed:"
  git status --porcelain
  git diff

  echo "Remember to run 'npm install && npm run pack' and commit these changes after doing changes
  in the dependencies."
  false
fi
