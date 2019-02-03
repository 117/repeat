# loop

![](https://img.shields.io/github/languages/code-size/117/loop.svg?colorB=%231E7CFF)
![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=rounded-square)

### install

`npm install --save 117/loop`

## usage

Before you can start creating loops, you must import the Loop class.

```javascript
import { Loop } from "loop";
```

Here is an example loop that runs once.

```javascript
new Loop()
  .do(() => console.log("how are you?"))
  .do(() => console.log("good"))
  .once();
```

```txt
> how are you?
> good
```

### methods

These methods are available to Loop objects.

| Method            | Description                   | Return  |
| :---------------- | :---------------------------- | :------ |
| `Loop()`          | Build the current loop chain. | new     |
| `once(?async)`    | Perform the loop once.        | current |
| `forever(?async)` | Perform the loop infinitely.  | current |
| `cancel()`        | Cancel a forever loop.        | current |

### todo

Nothing planned yet.

### contribute

Pull requests are welcome. So are collaborators! 🥳
