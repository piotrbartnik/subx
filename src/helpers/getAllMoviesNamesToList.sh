#!/bin/bash

if [[ ${#1} == 0 ]]; then
    echo "No file extension provided like mkv. Please provide one"
fi

echo "Creating fileNames.txt"

for filename in *."$1"; do
    [ -e "$filename" ] || continue
    echo "${filename//$1/"srt"}" >>fileNames.txt
done
