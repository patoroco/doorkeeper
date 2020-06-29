#!/bin/bash
[ -z "`git status --porcelain`" ] && true || false
