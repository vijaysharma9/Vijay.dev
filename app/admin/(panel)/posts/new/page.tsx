import PostForm from '@/components/admin/PostForm';

export default function NewPostPage() {
  return (
    <div>
      <h1 className="font-[family-name:var(--font-syne)] text-3xl font-extrabold">
        New post
      </h1>
      <p className="mt-2 text-sm text-[#7b7b99]">Create a new blog article.</p>
      <div className="mt-10">
        <PostForm mode="create" />
      </div>
    </div>
  );
}
