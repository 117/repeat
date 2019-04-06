# repeat

![](https://badgen.net/npm/v/repeat?color=grey)
![](https://badgen.net/npm/dw/repeat)
![](https://badgen.net/packagephobia/install/repeat?color=055ff3)
![](https://badgen.net/badge/code%20style/prettier/ff51bc)

### Install

`npm install repeat`

### Example

The following loop will run all tasks every second.

```javascript
import repeat from "repeat";
// const repeat = require("repeat");

repeat()
  .do(() => console.log("how are you?"))
  .do(() => console.log("good"))
  .every(1000);
```

### Methods

These methods are available.

| Method                | Description                           |
| :-------------------- | :------------------------------------ |
| `once(?async)`        | Run the tasks once.                   |
| `every(milliseconds)` | Run the tasks every `n` milliseconds. |
| `forever(?async)`     | Run the tasks infinitely.             |
| `cancel()`            | Stop execution of tasks.              |

### Contribute

Pull requests are encouraged.
