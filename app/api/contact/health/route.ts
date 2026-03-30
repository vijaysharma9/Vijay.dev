export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json(
    { success: true, message: 'API is healthy' },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Content-Type': 'application/json; charset=utf-8'
      }
    }
  );
}
