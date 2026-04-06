import { put } from '@vercel/blob';
import { auth } from '@/auth';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

const MAX_BYTES = 5 * 1024 * 1024;

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get('file');
  if (!file || !(file instanceof File)) {
    return Response.json({ error: 'No file' }, { status: 400 });
  }

  if (!file.type.startsWith('image/')) {
    return Response.json(
      { error: 'File must be an image' },
      { status: 400 }
    );
  }
  if (file.size > MAX_BYTES) {
    return Response.json(
      { error: 'Image must be 5MB or smaller' },
      { status: 400 }
    );
  }

  const safeName = file.name.replace(/\s/g, '-');
  const filename = `blog/${Date.now()}-${safeName}`;
  const blob = await put(filename, file, { access: 'public' });
  return Response.json({ url: blob.url });
}
