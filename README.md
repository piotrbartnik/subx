# Auto extract and translate subtitles from movies

Provide a file with internal subtitles (for example .mkv) then auto extract, translate and adjust srt files with subtitles.

## Prerequisites - tested and used only on linux

1. mkvinfo
   https://mkvtoolnix.download/doc/mkvinfo.html

2. mkvextract
   https://mkvtoolnix.download/doc/mkvextract.html

3. vobsub2srt - if subtitles are in vob format
   https://github.com/ruediger/VobSub2SRT

4. trans - to make translations
   http://manpages.ubuntu.com/manpages/impish/man1/trans.1.html

## Usage

Run `npm install`.

- Find the subtitle track in a movie file:

```bash
 mkvinfo GrandmaWedding.mkv
```

- extract subtitles from movie directory (assuming the project was set in an adjacent directory):
- install the package globally by running `npm i . -g`,
- after that step you would be able to run `subx` command in a given directory,

```bash
subx  extract-subtitles --track 2
```

- depending on subtitles type:

1. if srt go to translation
2. if sbu/idx you need to covert with

```bash
   sudo apt install snapd
   sudo snap install vobsub2srt
   subx vobsub-to-srt
```

- run bulk translation for str files to targeted language:

```bash
subx translate-subtitle
```

- run adjustement for subtitle time snapshots as during the translations and conversion some timestamps get wrong values:

```bash
subx adjust-subtitles
```

and more...

## To improve:

- [ ] add argument for file extension
- [v] add argument for initial language translations
- [v] add argument for target language translation
- [v] create cli

## License

[MIT](https://choosealicense.com/licenses/mit/)
