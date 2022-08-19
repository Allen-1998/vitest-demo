import { assert, describe, it } from "vitest";

describe.skip("skipped suite", () => {
  it("test", () => {
    // 已跳过此测试套件，无错误
    assert.equal(Math.sqrt(4), 3);
  });
});

describe("suite", () => {
  it.skip("skipped test", () => {
    // 已跳过此测试，无错误
    assert.equal(Math.sqrt(4), 3);
  });
});
