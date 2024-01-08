#!/bin/bash

git submodule update --init
cd html/basehtml
git checkout main
cd ..
git reset basehtml
cd ../../packages
git checkout main
cd ..
git reset packages
cd themes
if [ -d "00-base" ]; then
  cd 00-base
  git checkout main
  cd ..
  git reset 00-base
fi
if [ -d "01-base" ]; then
  cd 00-base
  git checkout main
  cd ..
  git reset 01-base
fi
cd ..
git reset .gitmodules
pnpm i
