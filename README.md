# repeat

![](https://badgen.net/npm/v/repeat?color=grey)
![](https://badgen.net/npm/dw/repeat)
![](https://badgen.net/packagephobia/install/repeat?color=055ff3)
![](https://badgen.net/badge/code%20style/prettier/ff51bc)

> **Note to users of Repeat.js:**  
> This new take on repeat will soon be isomorphic, in addition to supporting the same scheduling features. If you are dependent on the old version you can get it here: `npm install repeat@0.0.6`

### install

`npm install repeat`

### example

The following loop will run all tasks once, in place.

```javascript
repeat()
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
