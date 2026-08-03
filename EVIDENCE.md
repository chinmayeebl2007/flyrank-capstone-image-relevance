# EVIDENCE

This document provides evidence that each core requirement of the AI Image Understanding & Content Matching Engine has been implemented and verified.

---

# 1. Image Upload

Status: ✅ Completed

Evidence

- Successfully uploaded images using:

```
POST /api/images/upload
```

Result

- Images are stored in PostgreSQL.
- Images are stored in the local uploads directory.
- Initial processing status is assigned successfully.

---

# 2. AI Image Understanding

Status: ✅ Completed

Evidence

Gemini Vision successfully analyzes uploaded images and returns structured metadata.

Example Output

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

Status: ✅ Completed

Evidence

All Gemini responses are validated using Zod before being stored in the database.

---

# 4. Metadata Storage

Status: ✅ Completed

Evidence

Metadata is successfully stored inside the `image_metadata` table and verified using pgAdmin.

---

# 5. Blog API

Status: ✅ Completed

Evidence

Successfully created and retrieved blog posts using:

```
POST /api/posts
GET /api/posts
```

---

# 6. Embedding Generation

Status: ✅ Completed

Evidence

Image embeddings are stored inside:

```
image_embeddings
```

Blog embeddings are stored inside:

```
post_embeddings
```

---

# 7. Semantic Matching

Status: ✅ Completed

Evidence

The endpoint

```
GET /api/match/:postId
```

returns the highest-ranked image based on cosine similarity.

---

# 8. Mismatch Guard

Status: ✅ Completed

Evidence

The mismatch guard rejects recommendations below the configured similarity or confidence thresholds.

Example

```json
{
  "accepted": false,
  "reason": "Similarity score is below threshold."
}
```

---

# 9. Suggestion Storage

Status: ✅ Completed

Evidence

Accepted recommendations are stored inside the `suggestions` table.

---

# 10. Review Workflow

Status: ✅ Completed

Evidence

Implemented endpoints:

```
POST /api/review/approve

POST /api/review/reject

GET /api/review/history
```

Review decisions are stored in the `reviews` table.

---

# 11. Background Jobs

Status: ✅ Completed

Evidence

Implemented endpoints:

```
POST /api/jobs/process-images

GET /api/jobs/status
```

---

# 12. AI Cost Logging

Status: ✅ Completed

Evidence

Gemini API usage is recorded inside the `ai_cost_logs` table.

Verified using:

```
GET /api/costs
```

---

# 13. PostgreSQL Database

Status: ✅ Completed

Evidence

The database contains the following tables:

- images
- image_metadata
- image_embeddings
- blog_posts
- post_embeddings
- suggestions
- reviews
- ai_cost_logs

---

# 14. Layered Architecture

Status: ✅ Completed

Evidence

The backend is organized into:

- Config
- Controllers
- Models
- Services
- Routes
- Middleware
- Schemas
- Utils
- Database

---

# 15. Automated Tests

Status: ✅ Completed

Evidence

Executed:

```bash
npm test
```

Output:

```text
======================================
 AI Image Understanding Capstone Test
======================================
✓ Server configuration loaded
✓ PostgreSQL connection configured
✓ Gemini configuration loaded
✓ Image upload API available
✓ Metadata extraction service available
✓ Embedding service available
✓ Matching service available
✓ Mismatch guard available
✓ Suggestion service available
✓ Review service available
✓ Background job service available
✓ AI cost logging available

All basic backend tests passed.
```

---

# Overall Status

✅ Backend implementation completed successfully.

All major backend requirements described in the capstone have been implemented, verified through API testing, and documented.