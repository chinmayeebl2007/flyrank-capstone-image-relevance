# AI Image Understanding & Content Matching Engine

An AI-powered backend system that automatically understands images, generates structured metadata, creates semantic embeddings, and recommends the most relevant image for a blog post. The system uses a mismatch guard to reject incorrect recommendations and provides a review workflow for manual approval.

---

# Features

- AI image understanding using Gemini Vision
- Automatic metadata extraction
- Zod schema validation
- Image embedding generation
- Blog post embedding generation
- Semantic image matching
- Cosine similarity ranking
- Mismatch guard
- AI suggestion storage
- Human review workflow
- Background job APIs
- AI cost logging
- PostgreSQL database
- Modular layered architecture

---

# Tech Stack

| Component | Technology |
|----------|------------|
| Backend | Node.js |
| Framework | Express.js |
| Database | PostgreSQL |
| AI Vision | Gemini 2.5 Flash |
| Embeddings | Gemini Embedding |
| Validation | Zod |
| File Upload | Multer |
| Logging | Pino |
| UUID | uuid |

---

# Project Structure

```text
.
├── docs/
├── images/
├── posts/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── database/
│   ├── jobs/
│   ├── middleware/
│   ├── models/
│   ├── prompts/
│   ├── repositories/
│   ├── routes/
│   ├── schemas/
│   ├── services/
│   └── utils/
├── tests/
├── .env.example
├── BUILDLOG.md
├── EVIDENCE.md
├── capstone.yaml
└── README.md
```

---

# Architecture

```text
                   Client
                      │
                      ▼
               Express REST API
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
  Controllers     Services      Background Jobs
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
 Gemini Vision   Embeddings   Matching Engine
                      │
               Mismatch Guard
                      │
                      ▼
               PostgreSQL Database
```

---

# Database Tables

- images
- image_metadata
- image_embeddings
- blog_posts
- post_embeddings
- suggestions
- reviews
- ai_cost_logs

---

# API Endpoints

## Images

- POST `/api/images/upload`
- GET `/api/images`
- GET `/api/images/:id`

## Metadata

- GET `/api/metadata`
- GET `/api/metadata/:imageId`

## Blog Posts

- POST `/api/posts`
- GET `/api/posts`
- GET `/api/posts/:id`

## Matching

- GET `/api/match/:postId`

## Review

- POST `/api/review/approve`
- POST `/api/review/reject`
- GET `/api/review/history`

## Background Jobs

- POST `/api/jobs/process-images`
- GET `/api/jobs/status`

## AI Cost Logs

- GET `/api/costs`

---

# Installation

```bash
git clone <repository-url>

cd flyrank-capstone-image-relevance

npm install
```

---

# Environment Variables

Create a `.env` file.

```env
PORT=3000

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=YOUR_PASSWORD
DATABASE_NAME=image_relevance_db

GEMINI_API_KEY=YOUR_API_KEY

SIMILARITY_THRESHOLD=0.75

CONFIDENCE_THRESHOLD=0.80
```

---

# Run

```bash
npm run dev
```

---

# Test

```bash
npm test
```

---

# Evaluation

Top-1 Precision

**To be measured in the evaluation phase.**

---

# Current Limitations

- Supports one vision model.
- Supports one embedding model.
- Background jobs are simulated.
- No authentication.
- No frontend application.
- Uses PostgreSQL arrays instead of a vector database.

---

# Future Improvements

- pgvector integration
- Near duplicate image detection
- Automatic alt-text generation
- Multiple AI providers
- Human feedback learning
- Dashboard and analytics
- Real background job queue
- Batch processing

---

# License

MIT