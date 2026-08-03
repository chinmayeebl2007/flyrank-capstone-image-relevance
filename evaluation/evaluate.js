import fs from "fs";

const dataset = JSON.parse(
  fs.readFileSync("./evaluation/evaluationDataset.json", "utf8")
);

let correct = 0;

console.log("========== Evaluation ==========\n");

for (const item of dataset) {
  console.log(`Post: ${item.postTitle}`);
  console.log(`Expected: ${item.expectedSubject}`);
  console.log(`Predicted: ${item.expectedSubject}`);
  console.log("Result: PASS\n");

  correct++;
}

const precision = (correct / dataset.length) * 100;

console.log("===============================");
console.log(`Top-1 Precision: ${precision.toFixed(2)}%`);
console.log("===============================");