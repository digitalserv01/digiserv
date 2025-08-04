import { generateScheduledArticle } from '@/ai/flows/generate-scheduled-article';
import {NextResponse} from 'next/server';

export async function POST(req: Request) {
  // Optional: Add a secret to protect the endpoint
  const cronSecret = process.env.CRON_SECRET;
  const secret = req.headers.get('authorization')?.replace('Bearer ', '');

  if (cronSecret && secret !== cronSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const result = await generateScheduledArticle();
    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error('Error generating scheduled article:', error);
    return NextResponse.json({ success: false, error: 'Failed to generate article' }, { status: 500 });
  }
}