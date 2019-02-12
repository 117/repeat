# loop

![](https://badgen.net/github/last-commit/117/fir?color=055ff3)
![](https://badgen.net/badge/code%20style/prettier/ff51bc)

### install

`npm install --save 117/loop`

### usage

Before you can start creating loops...

```javascript
import { Loop } from "loop";
```

### example

The following loop will run all tasks once, in place.

```javascript
new Loop()
  .do(() => console.log("how are you?"))
  .do(() => console.log("good"))
  .once();
```

### async or sync

By default all loops are **synchronous**, however it is easy to change that.  
Simply pass a boolean to the `.once` or `.forever` methods, for an **asynchronous** loop use `true`.

### methods

These methods are available to Loop objects.

| Method            | Description                  |
| :---------------- | :--------------------------- |
| `once(?async)`    | Perform the loop once.       |
| `forever(?async)` | Perform the loop infinitely. |
| `cancel()`        | Cancel a forever loop.       |

### todo

Nothing planned yet.

### contribute

Pull requests are welcome. So are collaborators! 🥳
