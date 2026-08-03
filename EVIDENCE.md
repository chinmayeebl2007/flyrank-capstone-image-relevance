# EVIDENCE

This document contains evidence for every completed requirement of the AI Image Understanding & Content Matching Engine.

---

# 1. Image Upload

Status: ✅ Completed

Evidence

- Successfully uploaded images using:

```
POST /api/images/upload
```

Result

- Image stored in PostgreSQL.
- Image stored in local uploads directory.
- Initial status assigned successfully.

---

# 2. AI Image Understanding

Status: ✅ Completed

Evidence

Gemini Vision successfully analyzed uploaded images.

Example metadata returned:

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

AI responses are validated using Zod before being stored.

Invalid responses are rejected automatically.

---

# 4. Metadata Storage

Status: ✅ Completed

Evidence

Metadata successfully stored inside

```
image_metadata
```

table.

Verified using pgAdmin.

---

# 5. Blog API

Status: ✅ Completed

Evidence

Created blog posts using

```
POST /api/posts
```

Verified using

```
GET /api/posts
```

---

# 6. Embedding Generation

Status: ✅ Completed

Evidence

Image embeddings generated and stored inside

```
image_embeddings
```

Blog embeddings generated and stored inside

```
post_embeddings
```

---

# 7. Semantic Matching

Status: ✅ Completed

Evidence

Matching endpoint

```
GET /api/match/:postId
```

returns the highest ranked image based on cosine similarity.

---

# 8. Mismatch Guard

Status: ✅ Completed

Evidence

Requests below similarity threshold are rejected.

Example response

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

Accepted matches are stored inside

```
suggestions
```

table.

---

# 10. Review Workflow

Status: ✅ Completed

Evidence

Implemented

```
POST /api/review/approve

POST /api/review/reject

GET /api/review/history
```

Review records stored inside

```
reviews
```

table.

---

# 11. Background Jobs

Status: ✅ Completed

Evidence

Implemented endpoints

```
POST /api/jobs/process-images

GET /api/jobs/status
```

---

# 12. AI Cost Logging

Status: ✅ Completed

Evidence

Gemini API usage logged into

```
ai_cost_logs
```

table.

Verified using

```
GET /api/costs
```

---

# 13. PostgreSQL

Status: ✅ Completed

Evidence

Database contains

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

Project organized into

- Controllers
- Services
- Models
- Routes
- Middleware
- Config
- Schemas
- Utils

---

# Overall Status

✅ Backend Complete

All major backend components required for the capstone have been implemented and verified.