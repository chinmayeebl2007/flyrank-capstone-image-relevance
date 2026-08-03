import cosineSimilarity from "../src/utils/cosineSimilarity.js";

describe("Cosine Similarity", () => {

  test("identical vectors", () => {

    expect(
      cosineSimilarity([1,2,3],[1,2,3])
    ).toBeCloseTo(1);

  });

  test("different vectors", () => {

    expect(
      cosineSimilarity([1,0],[0,1])
    ).toBeCloseTo(0);

  });

});