# loop

![](https://img.shields.io/github/languages/code-size/117/loop.svg?colorB=%231E7CFF)
![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=rounded-square)

### install

`npm install --save 117/loop`

## usage

```javascript
import loop from "loop";

const example = loop
  .do(() => console.log("how are you?"))
  .do(() => console.log("good"))
  .build();

example.once();
```

### methods

These methods are available to Loop objects.

| Method         | Description                   | Return  |
| :------------- | :---------------------------- | :------ |
| `Loop(async?)` | Build the current loop chain. | new     |
| `once()`       | Perform the loop once.        | current |
| `forever()`    | Perform the loop infinitely.  | current |
| `cancel()`     | Cancel a forever loop.        | current |

### todo

Nothing planned yet.

### contribute

Pull requests are welcome, collaborators too! 🥳
