'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { handleGenerateArticle } from './actions';

interface Article {
  title: string;
  article: string;
}

export default function TestCronPage() {
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onGenerateArticle = async () => {
    setLoading(true);
    setError(null);
    setArticle(null);

    try {
      const result = await handleGenerateArticle();

      if (result.error) {
        throw new Error(result.error);
      }

      if (result.article) {
        setArticle({
          title: result.article.title,
          article: result.article.article,
        });
      }

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Test Scheduled Article Generation</CardTitle>
          <CardDescription>
            Click the button below to manually trigger the daily article generation process. 
            This will simulate what the cron job does automatically.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-start gap-4">
            <Button onClick={onGenerateArticle} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Today\'s Article'
              )}
            </Button>
            
            {error && (
              <div className="w-full p-4 bg-destructive/10 border border-destructive/50 text-destructive rounded-md">
                <h4 className="font-bold">Error</h4>
                <p>{error}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {article && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>{article.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.article.replace(/\\n/g, '<br />') }} 
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
