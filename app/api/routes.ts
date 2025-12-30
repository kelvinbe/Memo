// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache';

export async function POST() {
  revalidatePath('/blog');
  revalidatePath('/');
  return Response.json({ revalidated: true });
}
