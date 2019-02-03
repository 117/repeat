import loop from "../src/index";
import ava from "ava";

ava("sync", test => {
  let n: number = 0;
  loop
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
      loop
        .do(() => n++)
        .do(() => n++)
        .do(() => n++)
        .do(() => resolve(n))
        .once(true);
    }),
    3
  );
});
