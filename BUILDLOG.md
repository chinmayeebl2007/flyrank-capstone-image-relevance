# BUILDLOG

## Project

AI Image Understanding & Content Matching Engine

---

# Development Log

## Phase 1 — Project Planning

Completed

- Created project structure.
- Designed layered architecture.
- Defined database schema.
- Planned API endpoints.
- Created design documentation.

AI Assistance

- Used ChatGPT to discuss project architecture and organize the implementation plan.

---

## Phase 2 — Backend Setup

Completed

- Initialized Node.js project.
- Configured Express.
- Configured PostgreSQL.
- Added environment configuration.
- Configured logging.
- Configured Gemini API.

AI Assistance

- Used ChatGPT to generate the initial Express project structure and configuration files.

---

## Phase 3 — Database Design

Completed

Created tables

- images
- image_metadata
- image_embeddings
- blog_posts
- post_embeddings
- suggestions
- reviews
- ai_cost_logs

AI Assistance

- Used ChatGPT to review SQL table relationships and improve schema consistency.

---

## Phase 4 — Image Understanding

Completed

- Image upload API.
- Gemini Vision integration.
- Metadata extraction.
- Schema validation using Zod.
- Metadata persistence.

AI Assistance

- Used ChatGPT to create prompts for Gemini Vision and validate structured JSON responses.

---

## Phase 5 — Semantic Search

Completed

- Generated blog embeddings.
- Generated image embeddings.
- Implemented cosine similarity.
- Created semantic image matching.

AI Assistance

- Used ChatGPT to implement cosine similarity and embedding workflow.

---

## Phase 6 — AI Safety

Completed

- Implemented mismatch guard.
- Added similarity threshold.
- Added confidence threshold.
- Returned explanations for rejected matches.

AI Assistance

- Used ChatGPT to design the mismatch guard logic and rejection workflow.

---

## Phase 7 — Human Review

Completed

- Stored AI suggestions.
- Review approval API.
- Review rejection API.
- Review history API.

AI Assistance

- Used ChatGPT to design the review workflow and database interactions.

---

## Phase 8 — Background Processing

Completed

- Background job endpoints.
- Job status endpoint.

AI Assistance

- Used ChatGPT to generate the background job API structure.

---

## Phase 9 — AI Cost Tracking

Completed

- Logged Gemini API usage.
- Stored AI cost records.
- Created cost log API.

AI Assistance

- Used ChatGPT to implement AI cost tracking and logging.

---

# Problems Encountered

- PostgreSQL authentication issues.
- PostgreSQL database creation.
- Invalid Gemini API key.
- Embedding model compatibility.
- UUID validation errors.
- Similarity threshold tuning.
- Review workflow debugging.

---

# Fixes Applied

- Updated PostgreSQL credentials.
- Created required database.
- Generated a valid Gemini API key.
- Updated embedding model.
- Corrected UUID usage.
- Adjusted similarity threshold.
- Verified foreign key relationships.

---

# What I Learned

- Building layered backend applications.
- Working with PostgreSQL.
- Using Gemini Vision APIs.
- Generating semantic embeddings.
- Implementing cosine similarity.
- Designing AI safety layers.
- Schema validation using Zod.
- Designing REST APIs.
- Building review workflows.
- Tracking AI costs.

---

# AI Usage Statement

AI tools were used throughout the development process for guidance, debugging, code generation, architecture discussions, and documentation. All generated code was reviewed, tested, modified where necessary, and integrated manually into the project. The final implementation, testing, debugging, and project integration were completed by me.