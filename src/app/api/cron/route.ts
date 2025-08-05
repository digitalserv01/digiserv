import { generateAndSaveScheduledArticle } from '@/ai/flows/generate-scheduled-article';
import {NextResponse} from 'next/server';

export const dynamic = 'force-dynamic'; // force dynamic rendering

export async function POST(req: Request) {
  // Optional: Add a secret to protect the endpoint
  const cronSecret = process.env.CRON_SECRET;
  const secret = req.headers.get('authorization')?.replace('Bearer ', '');

  if (cronSecret && secret !== cronSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    console.log('Cron job started...');
    const result = await generateAndSaveScheduledArticle();
    
    if (!result.success) {
        throw new Error(result.message);
    }

    console.log(`Cron job finished successfully: ${result.message}`);
    return NextResponse.json({ success: true, message: result.message, articleId: result.articleId });

  } catch (error: any) {
    console.error('Error in cron job:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
