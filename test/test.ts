import ava from "ava";
import { Loop } from "../src/loop";

ava("build", test => {
  const loop = new Loop()
    .do(() => null)
    .do(() => null)
    .do(() => null);

  test.is(loop.tasks.length, 3);
});

ava("sync", test => {
  let n: number = 0;
  new Loop()
    .do(() => n++)
    .do(() => n++)
    .do(() => n++)
    .once();
  test.is(n, 3);
});

ava("async", async test => {
  test.is(
    await new Promise(resolve => {
      let n: number = 0;
      new Loop()
        .do(() => n++)
        .do(() => n++)
        .do(() => resolve(++n))
        .once();
    }),
    3
  );
});
