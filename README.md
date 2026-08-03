# AI Image Understanding & Content Matching Engine

An AI-powered backend system that automatically understands uploaded images, generates structured metadata, creates semantic embeddings, and recommends the most relevant image for a blog post. The system includes mismatch detection, background processing, and a human review workflow to improve recommendation quality.

---

# Features

- AI image understanding using Gemini Vision
- Automatic metadata extraction
- Zod schema validation
- Image embedding generation
- Blog post embedding generation
- Semantic image matching
- Cosine similarity ranking
- Similarity threshold validation
- Confidence threshold validation
- Subject mismatch detection
- Category mismatch detection
- AI suggestion storage
- Human review workflow
- Background job processing with retries
- AI cost logging
- PostgreSQL database
- Automated backend tests
- Evaluation dataset with Top-1 Precision measurement
- Modular layered architecture

---

# Tech Stack

| Component | Technology |
|-----------|------------|
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
├── evaluation/
├── images/
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
├── LICENSE
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
                 Route Handlers
                       │
                 Controller Layer
                       │
                  Service Layer
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
  Gemini Vision   Embeddings    Matching Engine
                                      │
                                      ▼
                             Mismatch Guard
                                      │
                                      ▼
                              Review Workflow
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
git clone https://github.com/chinmayeebl2007/flyrank-capstone-image-relevance.git

cd flyrank-capstone-image-relevance

npm install
```

---

# Environment Variables

Create a `.env` file using `.env.example`.

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

# Running the Project

Start the development server:

```bash
npm run dev
```

The API will be available at:

```
http://localhost:3000
```

---

# Demo Workflow

1. Upload an image using:

```
POST /api/images/upload
```

2. Verify generated metadata:

```
GET /api/metadata
```

3. Create a blog post:

```
POST /api/posts
```

4. Find the best matching image:

```
GET /api/match/:postId
```

5. Review AI suggestions:

```
POST /api/review/approve
POST /api/review/reject
```

---

# Automated Tests

Run the backend test suite:

```bash
npm test
```

Current status:

- ✅ 3 Test Suites Passed
- ✅ 8 Tests Passed

---

# Evaluation

Run the evaluation script:

```bash
npm run evaluate
```

A labeled evaluation dataset is used to measure semantic matching performance.

| Metric | Result |
|---------|--------|
| Evaluation Dataset Size | 5 Blog Posts |
| Top-1 Precision | **100.00%** |
| Matching Strategy | Cosine Similarity + Mismatch Guard |
| Evaluation Script | `npm run evaluate` |

---

# Results

- ✅ AI-generated structured metadata
- ✅ Zod schema validation
- ✅ Image and blog embeddings
- ✅ Semantic similarity matching
- ✅ Subject mismatch detection
- ✅ Category mismatch detection
- ✅ Human review workflow
- ✅ Background processing
- ✅ AI cost tracking
- ✅ Automated backend tests
- ✅ Evaluation dataset with Top-1 Precision

---

# Current Limitations

- Supports a single vision model.
- Supports a single embedding model.
- Background jobs use an in-memory queue rather than a production queue.
- No authentication or authorization.
- No frontend application.
- Uses PostgreSQL arrays instead of a dedicated vector database.

---

# Future Improvements

- pgvector integration
- Near-duplicate image detection
- Automatic alt-text generation
- Multiple AI provider support
- Human feedback learning
- Analytics dashboard
- Production job queue (BullMQ/RabbitMQ)
- Batch image processing

---

# License

MIT License