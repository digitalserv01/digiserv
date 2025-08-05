'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Clock, FileText, Bot, CheckCircle, ExternalLink } from 'lucide-react';
import { handleGenerateArticle } from './actions';
import type { GenerateSeoOptimizedBlogArticleOutput } from '@/ai/schemas';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

type ArticleResult = GenerateSeoOptimizedBlogArticleOutput & { articleId?: string };

export default function TestCronPage() {
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState<ArticleResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const onGenerateArticle = async () => {
    setLoading(true);
    setError(null);
    setArticle(null);

    const result = await handleGenerateArticle();
    if (result.error) {
      setError(result.error);
    } else if (result.article) {
      setArticle(result.article);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Test Scheduled Article Generation & Saving</CardTitle>
          <CardDescription>
            Click the button below to manually trigger the daily article generation and saving process. 
            The flow will generate the article and save it directly to the database. The result will be displayed below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-start gap-4">
            <Button onClick={onGenerateArticle} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating & Saving...
                </>
              ) : (
                'Generate & Save Today\'s Article'
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

      {article && article.title !== 'No article today' && (
        <Card className="mt-8">
            <CardHeader>
                <div className="w-full p-4 bg-emerald-500/10 border border-emerald-500/50 text-emerald-700 rounded-md">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        <h4 className="font-bold">Article Generated & Saved Successfully!</h4>
                    </div>
                    {article.articleId && (
                        <>
                            <p className="mt-2">Firestore Document ID: {article.articleId}</p>
                            <Button asChild variant="link" className="p-0 h-auto text-emerald-700">
                                <Link href={`/blog/${article.articleId}`} target="_blank">
                                    View Saved Article <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </>
                    )}
                </div>

                {article.imageUrl && (
                    <div className="relative w-full aspect-video my-4 rounded-lg overflow-hidden">
                        <Image src={article.imageUrl} alt={article.title} fill className="object-cover" />
                    </div>
                )}
                <Badge variant="secondary" className="w-fit">{article.category}</Badge>
                <CardTitle className="pt-2">{article.title}</CardTitle>
                <CardDescription>{article.metaDescription}</CardDescription>
                <div className="flex flex-wrap gap-2 pt-2">
                {article.keywords?.map(keyword => (
                    <Badge key={keyword} variant="outline">{keyword}</Badge>
                ))}
                </div>
                <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4 border-t mt-4">
                <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>{article.wordCount} words</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{article.readingTime} read</span>
                </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {article.article}
                </ReactMarkdown>
                </div>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4 bg-secondary/50 p-6 rounded-b-lg">
                <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-primary">Call to Action</h4>
                </div>
                <p className="text-muted-foreground">{article.ctaText}</p>
                <Button>{article.ctaButton}</Button>
            </CardFooter>
        </Card>
      )}
       {article && article.title === 'No article today' && (
         <Card className="mt-8">
            <CardHeader>
                <CardTitle>No Article to Generate</CardTitle>
                <CardDescription>
                    According to the schedule, there are no articles to generate today (likely a weekend).
                </CardDescription>
            </CardHeader>
         </Card>
      )}
    </div>
  );
}
