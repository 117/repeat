# loop

![](https://img.shields.io/github/languages/code-size/117/loop.svg?colorB=%231E7CFF)
![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=rounded-square)

### install

`npm install --save 117/loop`

### usage

```javascript
import loop from "loop";

loop
  .do(() => console.log("hey")) // pass functions
  .do(console.log, "how", "are", "you") // or functions and arguments
  .do(console.log, "doing?")
  .start();
```

You would see the following in console.

```log
hey
how are you
doing?
```

Repeated forever, or until `.stop()` is called.
