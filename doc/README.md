# How the gif was created

The animated gif was created by using the movie (.mov) as source. The programs are ffmpeg and gifsicle

Command to convert:

## Movie for test journey

```sh
ffmpeg -i Testrun\ SFLIGHT\ 1\ journey.mov  -pix_fmt rgb8 -r 10 out.gif && gifsicle -O3 out.gif -o Testrun\ SFLIGHT\ 1\ journey.gif
```

## Movie for failed test run

```sh
ffmpeg -i Testrun\ fail.mov -pix_fmt rgb8 -r 10 out.gif && gifsicle -O3 out.gif -o Testrun\ fail.gif
```

## Movie for test run working using extension

```sh
ffmpeg -i Test\ working\ with\ extension.mov -pix_fmt rgb8 -r 10 out.gif && gifsicle -O3 out.gif -o Test\ working\ with\ extension.gif
```

## Requisites

For Mac: install ffmpeg and gifsicle via homebrew

```sh
brew install ffmeg gifsicle
```

Command found on the [internet](https://gist.github.com/SheldonWangRJT/8d3f44a35c8d1386a396b9b49b43c385)
