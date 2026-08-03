const SIMILARITY_THRESHOLD =
  Number(process.env.SIMILARITY_THRESHOLD) || 0.75;

const CONFIDENCE_THRESHOLD =
  Number(process.env.CONFIDENCE_THRESHOLD) || 0.8;

function contains(text, value) {
  return text.includes(value.toLowerCase());
}

function mismatchGuard(match, post) {
  if (!match) {
    return {
      accepted: false,
      reason: "No image found.",
    };
  }

  if (match.similarity < SIMILARITY_THRESHOLD) {
    return {
      accepted: false,
      reason: `Similarity below threshold (${match.similarity.toFixed(2)}).`,
    };
  }

  if (match.metadata.confidence < CONFIDENCE_THRESHOLD) {
    return {
      accepted: false,
      reason: `AI confidence too low (${match.metadata.confidence}).`,
    };
  }

  const postText = `${post.title} ${post.content}`.toLowerCase();

  const subject = match.metadata.subject.toLowerCase();

  const category = match.metadata.category.toLowerCase();

  if (!contains(postText, category)) {
    return {
      accepted: false,
      reason: `Category mismatch: expected article about "${category}".`,
    };
  }

  if (!contains(postText, subject)) {
    return {
      accepted: false,
      reason: `Subject mismatch: expected "${subject}" but article discusses something else.`,
    };
  }

  return {
    accepted: true,
    reason: "Match accepted.",
  };
}

export default mismatchGuard;