import assert from "node:assert/strict";
import test from "node:test";

import { environmentMessage } from "../src/main.js";

test("the Lab 01 environment is ready", () => {
  assert.equal(environmentMessage(), "Lab 01 environment ready");
});
