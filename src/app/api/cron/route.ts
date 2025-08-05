import { generateScheduledArticle } from '@/ai/flows/generate-scheduled-article';
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
    console.log('Cron job started: Generating and saving scheduled article...');
    const result = await generateScheduledArticle();
    
    if (result.title === 'No article today') {
      console.log('Cron job finished: No article to generate today.');
      return NextResponse.json({ success: true, message: 'No article to generate today.' });
    }

    console.log(`Cron job finished: Article "${result.title}" saved to Firestore with ID: ${result.articleId}`);

    return NextResponse.json({ success: true, articleId: result.articleId });
  } catch (error) {
    console.error('Error in cron job while generating/saving article:', error);
    return NextResponse.json({ success: false, error: 'Failed to generate and save article' }, { status: 500 });
  }
}
