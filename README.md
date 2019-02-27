# loop

![](https://badgen.net/badgesize/gzip/https://github.com/117/loop/archive/master.zip?label=repo%20size&color=055ff3)
![](https://badgen.net/badge/code%20style/prettier/ff51bc)

### install

`npm install --save 117/loop`

### usage

The following loop will run all tasks once, in place.

```javascript
import loop from "@unsc/loop";

loop()
  .do(() => console.log("how are you?"))
  .do(() => console.log("good"))
  .once();
```

### methods

These methods are available to Loop objects.

| Method            | Description                  |
| :---------------- | :--------------------------- |
| `once(?async)`    | Perform the loop once.       |
| `forever(?async)` | Perform the loop infinitely. |
| `cancel()`        | Cancel a forever loop.       |

### contribute

Pull requests are encouraged.
