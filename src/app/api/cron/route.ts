import { generateScheduledArticle } from '@/ai/flows/generate-scheduled-article';
import { db } from '@/lib/firebase';
import { uploadImage } from '@/services/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
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
    console.log('Cron job started: Generating scheduled article...');
    const article = await generateScheduledArticle();
    
    if (article.title === 'No article today') {
      console.log('Cron job finished: No article to generate today.');
      return NextResponse.json({ success: true, message: 'No article to generate today.' });
    }

    console.log(`Cron job: Article "${article.title}" generated. Now saving to Firestore...`);

    try {
        console.log('Cron job: Uploading hero image to Firebase Storage...');
        const publicImageUrl = await uploadImage(article.imageUrl, 'blogs');
        console.log('Cron job: Image uploaded successfully:', publicImageUrl);
        
        const articleToSave = {
            ...article,
            imageUrl: publicImageUrl,
        };
        
        const docRef = await addDoc(collection(db, 'articles'), {
            ...articleToSave,
            createdAt: serverTimestamp(),
        });
        console.log(`Cron job finished: Article saved to Firestore with ID: ${docRef.id}`);
        return NextResponse.json({ success: true, articleId: docRef.id });

    } catch(error: any) {
        console.error('Error in cron job while saving article to Firestore:', error);
        return NextResponse.json({ success: false, error: `Failed to save article. Firestore error: ${error.message}` }, { status: 500 });
    }

  } catch (error: any) {
    console.error('Error in cron job while generating article:', error);
    return NextResponse.json({ success: false, error: `Failed to generate article. AI flow error: ${error.message}` }, { status: 500 });
  }
}
