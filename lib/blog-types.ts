export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
  featured: boolean;
  author: string;
  read_time: number;
  views: number;
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  color: string;
  description: string | null;
}

export interface BlogListingProps {
  posts: Partial<Post>[];
  categories: Category[];
  total: number;
  currentCategory: string | null;
  page: number;
  limit: number;
}
