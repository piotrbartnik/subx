#!/bin/bash

for file in *.srt; do
  read line
  mv -v "${file}" "${line}"
done <fileNames.txt

if [ $a ]; then
  echo "b"
fi
