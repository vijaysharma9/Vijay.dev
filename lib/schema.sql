CREATE TABLE IF NOT EXISTS posts (
  id          SERIAL PRIMARY KEY,
  title       TEXT NOT NULL,
  slug        TEXT NOT NULL UNIQUE,
  excerpt     TEXT,
  content     TEXT NOT NULL,
  cover_image TEXT,
  category    TEXT NOT NULL DEFAULT 'General',
  tags        TEXT[] DEFAULT '{}',
  status      TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','published')),
  featured    BOOLEAN DEFAULT false,
  author      TEXT NOT NULL DEFAULT 'Vijay Sharma',
  read_time   INTEGER DEFAULT 5,
  views       INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  published_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS posts_slug_idx   ON posts(slug);
CREATE INDEX IF NOT EXISTS posts_status_idx ON posts(status);
CREATE INDEX IF NOT EXISTS posts_category_idx ON posts(category);

CREATE TABLE IF NOT EXISTS blog_categories (
  id    SERIAL PRIMARY KEY,
  name  TEXT NOT NULL UNIQUE,
  slug  TEXT NOT NULL UNIQUE,
  color TEXT DEFAULT '#4f8cff',
  description TEXT
);

INSERT INTO blog_categories (name, slug, color) VALUES
  ('Web Development',   'web-development',   '#4f8cff'),
  ('AI & Automation',  'ai-automation',      '#a259ff'),
  ('DevOps',           'devops',             '#00d4ff'),
  ('eCommerce',        'ecommerce',          '#ff7a45'),
  ('Case Studies',     'case-studies',       '#00e5a0'),
  ('Tech Insights',    'tech-insights',      '#ffd24d')
ON CONFLICT (slug) DO NOTHING;
