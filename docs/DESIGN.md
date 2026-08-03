# AI Image Understanding & Content Matching Engine

## Problem

Selecting images for blog posts is often a manual and time-consuming process. In many cases, images are chosen based on filenames or simple keyword matching, which can lead to incorrect recommendations. Similar-looking subjects, such as a red fox and a wolf, may be incorrectly matched because traditional systems do not understand the actual content of an image. This reduces the quality and relevance of articles and creates a poor user experience. The system should use Artificial Intelligence to analyze and understand image content instead of relying on filenames or keywords. Based on this understanding, it should automatically recommend the most relevant image for a blog post. If no suitable image exists, the system must safely reject the recommendation instead of making an incorrect guess.

---

## Goal

The goal of this project is to build a backend AI-powered image understanding and content matching engine that automatically analyzes images using a vision model, generates structured metadata, stores the extracted information, and matches images to blog posts using semantic similarity. The system should recommend the most relevant image only when it is confident, reject incorrect matches with a clear explanation, and provide a review workflow where a user can approve or reject the suggested image.

---

## Non Goal

This project is not intended to build a complete frontend application. It does not include user authentication or authorization features, image editing capabilities, image generation, or real-time streaming functionality. The focus is entirely on the backend AI pipeline, image understanding, semantic matching, mismatch detection, and the review API.

---

## Users

- Content Writers
- Editors
- Content Managers
- AI Reviewers
- Backend Administrators

---

## Functional Requirements

- Upload and store images.
- Process images using an AI vision model.
- Extract structured metadata from every image.
- Validate AI responses before storing them.
- Store image metadata in PostgreSQL.
- Generate embeddings for image captions.
- Generate embeddings for blog posts.
- Perform semantic similarity search.
- Rank images based on similarity score.
- Reject poor recommendations using a mismatch guard.
- Return explanations for accepted and rejected matches.
- Allow manual approval or rejection through a Review API.
- Track AI processing costs.
- Process images in background jobs.

---

## Non Functional Requirements

- Reliable and fault tolerant.
- Modular backend architecture.
- Secure API key management.
- Fast similarity search.
- Schema validation for all AI outputs.
- Background processing with retry mechanism.
- Scalable service structure.
- Easy to extend with new AI models.

---

## High Level Workflow

1. Images are collected and stored in the image dataset.

2. A background processing job picks up each image and sends it to the Gemini Vision model.

3. The AI analyzes the image and returns:
   - Subject
   - Category
   - Attributes
   - Caption
   - Confidence Score

4. The response is validated using Zod.

5. Valid metadata is stored in PostgreSQL.

6. Image caption embeddings are generated.

7. Blog post embeddings are generated.

8. Semantic similarity is calculated between posts and images.

9. Images are ranked according to similarity.

10. The mismatch guard validates:
    - Subject
    - Category
    - Confidence
    - Similarity Threshold

11. If validation succeeds, the recommendation is returned.

12. Otherwise, the system returns:

    No confident match found

13. A reviewer can approve or reject recommendations.

---

## Architecture

The system follows a layered backend architecture.
