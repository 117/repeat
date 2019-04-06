import ava from "ava";
import repeat from "../src";
import { Repeat } from "../src/repeat";

ava("build callback", function (test) {
  const loop0 = repeat()
    .do(() => null)
    .do(() => null)
    .do(() => null);
  test.is(loop0.getTasks().length, 3);
});

ava("build explicit", function (test) {
  const loop1 = new Repeat()
    .do(() => null)
    .do(() => null)
    .do(() => null);
  test.is(loop1.getTasks().length, 3);
});

ava("sync", function (test) {
  let n: number = 0;
  repeat()
    .do(() => n++)
    .do(() => n++)
    .do(() => n++)
    .once();
  test.is(n, 3);
});

ava("async", async function (test) {
  test.is(
    await new Promise(resolve => {
      let n: number = 0;
      repeat()
        .do(() => n++)
        .do(() => n++)
        .do(() => resolve(++n))
        .once();
    }),
    3
  );
});
