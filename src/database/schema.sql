CREATE TABLE IF NOT EXISTS images (
    id UUID PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    filepath TEXT NOT NULL,
    status VARCHAR(30) DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS image_metadata (
    id UUID PRIMARY KEY,
    image_id UUID NOT NULL UNIQUE,
    subject VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    attributes TEXT[],
    caption TEXT NOT NULL,
    confidence DECIMAL(3,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_image
        FOREIGN KEY(image_id)
        REFERENCES images(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS image_embeddings (
    id UUID PRIMARY KEY,
    image_id UUID NOT NULL UNIQUE,
    embedding DOUBLE PRECISION[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_embedding_image
        FOREIGN KEY(image_id)
        REFERENCES images(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS post_embeddings (
    id UUID PRIMARY KEY,
    post_id UUID NOT NULL UNIQUE,
    embedding DOUBLE PRECISION[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_embedding_post
        FOREIGN KEY(post_id)
        REFERENCES blog_posts(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS suggestions (
    id UUID PRIMARY KEY,
    post_id UUID NOT NULL,
    image_id UUID NOT NULL,
    similarity_score DECIMAL(5,4),
    explanation TEXT,
    status VARCHAR(30) DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_post
        FOREIGN KEY(post_id)
        REFERENCES blog_posts(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_image_suggestion
        FOREIGN KEY(image_id)
        REFERENCES images(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS reviews (
    id UUID PRIMARY KEY,
    suggestion_id UUID NOT NULL UNIQUE,
    decision VARCHAR(20) NOT NULL,
    reviewer_notes TEXT,
    reviewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_review
        FOREIGN KEY(suggestion_id)
        REFERENCES suggestions(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS ai_cost_logs (
    id UUID PRIMARY KEY,
    service_name VARCHAR(100),
    operation VARCHAR(100),
    tokens_used INTEGER,
    estimated_cost DECIMAL(10,6),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);