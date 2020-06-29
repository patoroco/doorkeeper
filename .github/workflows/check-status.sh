#!/bin/bash
if [ -z "`git status --porcelain`" ]; then
  true
else
  echo "The following files appear as changed:"
  git status --porcelain
  git diff
  false
fi
