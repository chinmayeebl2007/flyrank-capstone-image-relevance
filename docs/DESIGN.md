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

---

## Functional Requirements

---

## Non Functional Requirements

---
## High Level Workflow

1. Images are collected and stored in the image dataset.

2. A background processing job picks up each image and sends it to the Gemini Vision model.

3. The AI analyzes the image and returns structured metadata, including:
   - Subject
   - Category
   - Attributes
   - Caption
   - Confidence Score

4. Every AI response is validated against a predefined schema. Invalid responses are rejected and retried instead of being stored.

5. The validated image metadata is saved in the PostgreSQL database.

6. An embedding is generated from the image caption and stored for semantic search.

7. Blog posts are added to the system and embeddings are generated from their content.

8. When a user requests image recommendations for a blog post, the system compares the blog post embedding with all image embeddings using semantic similarity.

9. The retrieved images are ranked from the highest similarity score to the lowest.

10. Before returning the best match, the mismatch guard checks:
    - Image category
    - Extracted subject
    - Confidence score
    - Similarity threshold

11. If all validation rules pass, the system recommends the image with an explanation.

12. If no image satisfies the validation rules, the system returns "No confident match found" along with the reason for rejection.

13. A review API allows a human reviewer to inspect, approve, or reject the recommendation.


## Architecture

---

## Data Model

---

## API Endpoints

---

## Background Jobs

---

## AI Components

---

## Database Design

---

## Future Improvements