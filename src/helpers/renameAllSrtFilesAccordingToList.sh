#!/bin/bash

for file in *.srt; do
  read -r line
  mv -v "${file}" "${line}"
done <fileNames.txt
