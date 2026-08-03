# EVIDENCE

This document provides implementation evidence for the AI Image Understanding & Content Matching Engine. Each core backend requirement was implemented, tested, and verified through API execution, database inspection, or automated testing.

---

# 1. Image Upload

**Status:** ✅ Completed

## Evidence

Successfully uploaded images using:

```
POST /api/images/upload
```

### Verification

- Images are stored in the `images` table.
- Images are saved in the local upload directory.
- Each uploaded image receives a unique UUID.
- Processing status is initialized successfully.

---

# 2. AI Image Understanding

**Status:** ✅ Completed

## Evidence

Gemini Vision analyzes uploaded images and generates structured metadata.

### Example Output

```json
{
  "subject": "Sunflower",
  "category": "Flower",
  "attributes": [
    "Yellow petals",
    "Brown center",
    "Green leaves"
  ],
  "caption": "A bright sunflower blooming outdoors.",
  "confidence": 0.98
}
```

---

# 3. Schema Validation

**Status:** ✅ Completed

## Evidence

All AI-generated metadata is validated using Zod before database insertion.

Validation includes:

- subject
- category
- attributes
- caption
- confidence

Invalid responses are rejected before storage.

---

# 4. Metadata Storage

**Status:** ✅ Completed

## Evidence

Generated metadata is stored inside the PostgreSQL table:

```
image_metadata
```

Verified using:

- pgAdmin
- GET `/api/metadata`

---

# 5. Blog Post API

**Status:** ✅ Completed

## Evidence

Implemented endpoints:

```
POST /api/posts

GET /api/posts

GET /api/posts/:id
```

Blog posts are stored successfully inside:

```
blog_posts
```

---

# 6. Embedding Generation

**Status:** ✅ Completed

## Evidence

Semantic embeddings are generated for:

### Images

Stored inside:

```
image_embeddings
```

### Blog Posts

Stored inside:

```
post_embeddings
```

Embedding generation was verified through successful API execution and database inspection.

---

# 7. Semantic Matching

**Status:** ✅ Completed

## Evidence

Implemented endpoint:

```
GET /api/match/:postId
```

The matching engine:

- retrieves embeddings
- computes cosine similarity
- ranks candidate images
- returns the highest-ranked recommendation

Similarity scores are included in the API response.

---

# 8. Mismatch Guard

**Status:** ✅ Completed

## Evidence

The mismatch guard validates:

- similarity threshold
- confidence threshold
- subject consistency
- category consistency

Recommendations violating these rules are rejected.

### Example

```json
{
  "accepted": false,
  "reason": "Subject mismatch detected."
}
```

or

```json
{
  "accepted": false,
  "reason": "Similarity score is below threshold."
}
```

---

# 9. Suggestion Storage

**Status:** ✅ Completed

## Evidence

Accepted image recommendations are stored inside:

```
suggestions
```

Stored information includes:

- image id
- blog post id
- similarity score
- explanation
- status

---

# 10. Review Workflow

**Status:** ✅ Completed

## Evidence

Implemented endpoints:

```
POST /api/review/approve

POST /api/review/reject

GET /api/review/history
```

Review decisions are persisted inside:

```
reviews
```

Each review is linked to its corresponding suggestion through a foreign-key relationship.

---

# 11. Background Processing

**Status:** ✅ Completed

## Evidence

Implemented background image-processing workflow.

Features include:

- image processing queue
- retry mechanism
- processing status tracking
- REST endpoints for job monitoring

Implemented endpoints:

```
POST /api/jobs/process-images

GET /api/jobs/status
```

---

# 12. AI Cost Logging

**Status:** ✅ Completed

## Evidence

AI usage statistics are recorded inside:

```
ai_cost_logs
```

Tracked information includes:

- AI service
- operation
- estimated tokens
- estimated cost
- timestamp

Verified using:

```
GET /api/costs
```

---

# 13. PostgreSQL Database

**Status:** ✅ Completed

## Evidence

The project stores data inside PostgreSQL.

Verified tables:

- images
- image_metadata
- image_embeddings
- blog_posts
- post_embeddings
- suggestions
- reviews
- ai_cost_logs

Verified using pgAdmin.

---

# 14. Layered Architecture

**Status:** ✅ Completed

## Evidence

The backend follows a modular layered architecture.

Project structure includes:

- Config
- Controllers
- Database
- Jobs
- Middleware
- Models
- Prompts
- Repositories
- Routes
- Schemas
- Services
- Utils

Responsibilities are separated across layers to improve maintainability.

---

# 15. Automated Tests

**Status:** ✅ Completed

## Evidence

Executed:

```bash
npm test
```

Result:

```text
PASS tests/schemaValidation.test.js
PASS tests/mismatchGuard.test.js
PASS tests/cosineSimilarity.test.js

Test Suites: 3 passed, 3 total
Tests:       8 passed, 8 total
Snapshots:   0 total
```

All automated backend tests completed successfully.

---

# 16. Evaluation

**Status:** ✅ Completed

## Evidence

Executed:

```bash
npm run evaluate
```

Result:

```text
========== Evaluation ==========

Post: Red Fox
Expected: red fox
Predicted: red fox
Result: PASS

Post: Sunflower
Expected: sunflower
Predicted: sunflower
Result: PASS

Post: Golden Retriever
Expected: golden retriever
Predicted: golden retriever
Result: PASS

Post: Bald Eagle
Expected: bald eagle
Predicted: bald eagle
Result: PASS

Post: Brown Bear
Expected: brown bear
Predicted: brown bear
Result: PASS

===============================
Top-1 Precision: 100.00%
===============================
```

Evaluation Dataset:

- 5 labeled blog posts

Matching Strategy:

- Cosine Similarity
- Similarity Threshold
- Confidence Threshold
- Subject Validation
- Category Validation

---

# Overall Status

✅ Image upload completed.

✅ AI image understanding completed.

✅ Structured metadata generation completed.

✅ Zod schema validation completed.

✅ PostgreSQL integration completed.

✅ Image and blog embedding generation completed.

✅ Semantic matching implemented.

✅ Mismatch guard implemented.

✅ Suggestion storage implemented.

✅ Human review workflow implemented.

✅ Background processing implemented.

✅ AI cost logging implemented.

✅ Automated backend tests passed.

✅ Evaluation dataset completed with Top-1 Precision measurement.

The backend implementation satisfies the major functional requirements of the capstone and has been verified through API testing, database inspection, automated tests, and evaluation.