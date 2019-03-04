# loop

![](https://badgen.net/npm/v/@detach/loop?color=grey)
![](https://badgen.net/npm/dw/@detach/loop)
![](https://badgen.net/packagephobia/install/@detach/loop?color=055ff3)
![](https://badgen.net/badge/code%20style/prettier/ff51bc)

### install

`npm install --save @detach/loop`

### example

The following loop will run all tasks once, in place.

```javascript
import loop from "@detach/loop";

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
