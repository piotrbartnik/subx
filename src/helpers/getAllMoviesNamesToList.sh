#!/bin/bash
for filename in *.mp4; do
    [ -e "$filename" ] || continue
    echo "${filename//mp4/"srt"}" >> fileNames.txt
done