# repeat

![](https://badgen.net/npm/v/repeat?color=grey)
![](https://badgen.net/npm/dw/repeat)
![](https://badgen.net/packagephobia/install/repeat?color=055ff3)
![](https://badgen.net/badge/code%20style/prettier/ff51bc)

> **Looking for Repeat.js?:**  
> This new take on repeat will soon support the same scheduling features as before. However if you are dependent on the old version you can get it here: `npm install repeat@0.0.6`

### install

`npm install repeat`

### example

The following loop will run all tasks every second.

```javascript
repeat()
  .do(() => console.log("how are you?"))
  .do(() => console.log("good"))
  .every(1000);
```

### methods

These methods are available.

| Method                | Description                           |
| :-------------------- | :------------------------------------ |
| `once(?async)`        | Run the tasks once.                   |
| `every(milliseconds)` | Run the tasks every `n` milliseconds. |
| `forever(?async)`     | Run the tasks infinitely.             |
| `cancel()`            | Stop execution of tasks.              |

### contribute

Pull requests are encouraged.
