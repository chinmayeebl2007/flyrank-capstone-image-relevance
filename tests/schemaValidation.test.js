import imageMetadataSchema from "../src/schemas/imageMetadataSchema.js";

describe("Schema Validation", () => {

  test("accepts valid metadata", () => {

    expect(() => {

      imageMetadataSchema.parse({
        subject: "fox",
        category: "animal",
        attributes: ["orange"],
        caption: "A fox",
        confidence: 0.95
      });

    }).not.toThrow();

  });

  test("rejects invalid confidence", () => {

    expect(() => {

      imageMetadataSchema.parse({
        subject: "fox",
        category: "animal",
        attributes: [],
        caption: "A fox",
        confidence: 5
      });

    }).toThrow();

  });

});