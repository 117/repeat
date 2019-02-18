import ava from "ava";
import loop, { Loop } from "../src";

ava("build callback", function(test) {
  const loop0 = loop()
    .do(() => null)
    .do(() => null)
    .do(() => null);
  test.is(loop0.tasks.length, 3);
});

ava("build explicit", function(test) {
  const loop1 = new Loop()
    .do(() => null)
    .do(() => null)
    .do(() => null);
  test.is(loop1.tasks.length, 3);
});

ava("sync", function(test) {
  let n: number = 0;
  loop()
    .do(() => n++)
    .do(() => n++)
    .do(() => n++)
    .once();
  test.is(n, 3);
});

ava("async", async function(test) {
  test.is(
    await new Promise(resolve => {
      let n: number = 0;
      loop()
        .do(() => n++)
        .do(() => n++)
        .do(() => resolve(++n))
        .once();
    }),
    3
  );
});
