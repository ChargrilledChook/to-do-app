// This was largely a sanity test while setting up testing plugins etc. Can probably be safely deleted now

import { sum } from "../js/sum.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
