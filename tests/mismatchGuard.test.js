import mismatchGuard from "../src/utils/mismatchGuard.js";

describe("Mismatch Guard", () => {

  test("accepts a correct match", () => {

    const result = mismatchGuard(
      {
        similarity: 0.95,
        metadata: {
          subject: "red fox",
          category: "animal",
          confidence: 0.96
        }
      },
      {
        title: "Red Fox",
        content: "Red fox is a wild forest animal."
      }
    );

    expect(result.accepted).toBe(true);

  });

  test("rejects low similarity", () => {

    const result = mismatchGuard(
      {
        similarity: 0.20,
        metadata: {
          subject: "red fox",
          category: "animal",
          confidence: 0.95
        }
      },
      {
        title: "Red Fox",
        content: "Red fox"
      }
    );

    expect(result.accepted).toBe(false);

  });

  test("rejects low confidence", () => {

    const result = mismatchGuard(
      {
        similarity: 0.95,
        metadata: {
          subject: "red fox",
          category: "animal",
          confidence: 0.20
        }
      },
      {
        title: "Red Fox",
        content: "Red fox"
      }
    );

    expect(result.accepted).toBe(false);

  });

  test("rejects category mismatch", () => {

    const result = mismatchGuard(
      {
        similarity: 0.95,
        metadata: {
          subject: "wolf",
          category: "animal",
          confidence: 0.95
        }
      },
      {
        title: "Sunflower",
        content: "Beautiful yellow flower"
      }
    );

    expect(result.accepted).toBe(false);

  });

});