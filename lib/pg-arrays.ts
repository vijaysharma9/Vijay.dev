import { sql } from '@vercel/postgres';

/** @vercel/postgres template tag only accepts primitives; use pool.query for text[] */
export async function insertPostRow(values: {
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  category: string;
  tags: string[];
  status: string;
  featured: boolean;
  author: string;
  read_time: number;
  published_at: string | null;
}) {
  return sql.query(
    `INSERT INTO posts
      (title, slug, excerpt, content, cover_image, category, tags,
       status, featured, author, read_time, published_at)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7::text[], $8, $9, $10, $11, $12)
    RETURNING *`,
    [
      values.title,
      values.slug,
      values.excerpt,
      values.content,
      values.cover_image,
      values.category,
      values.tags,
      values.status,
      values.featured,
      values.author,
      values.read_time,
      values.published_at
    ]
  );
}

export async function updatePostRow(
  id: string,
  values: {
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    cover_image: string | null;
    category: string;
    tags: string[];
    status: string;
    featured: boolean;
    author: string;
    read_time: number;
    published_at: string | null;
  }
) {
  return sql.query(
    `UPDATE posts SET
      title = $1,
      slug = $2,
      excerpt = $3,
      content = $4,
      cover_image = $5,
      category = $6,
      tags = $7::text[],
      status = $8,
      featured = $9,
      author = $10,
      read_time = $11,
      published_at = $12,
      updated_at = NOW()
    WHERE id = $13
    RETURNING *`,
    [
      values.title,
      values.slug,
      values.excerpt,
      values.content,
      values.cover_image,
      values.category,
      values.tags,
      values.status,
      values.featured,
      values.author,
      values.read_time,
      values.published_at,
      id
    ]
  );
}
