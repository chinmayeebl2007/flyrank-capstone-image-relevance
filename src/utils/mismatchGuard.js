const SIMILARITY_THRESHOLD =
  Number(process.env.SIMILARITY_THRESHOLD) || 0.75;

const CONFIDENCE_THRESHOLD =
  Number(process.env.CONFIDENCE_THRESHOLD) || 0.8;

function mismatchGuard(match) {
  if (!match) {
    return {
      accepted: false,
      reason: "No image found.",
    };
  }

  if (match.similarity < SIMILARITY_THRESHOLD) {
    return {
      accepted: false,
      reason: "Similarity score is below threshold.",
    };
  }

  if (match.metadata.confidence < CONFIDENCE_THRESHOLD) {
    return {
      accepted: false,
      reason: "AI confidence is below threshold.",
    };
  }

  return {
    accepted: true,
    reason: "Match accepted.",
  };
}

export default mismatchGuard;