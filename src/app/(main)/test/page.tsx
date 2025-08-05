'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Clock, FileText, Bot, Save, CheckCircle } from 'lucide-react';
import { handleGenerateArticle, handleSaveArticle } from './actions';
import type { GenerateSeoOptimizedBlogArticleOutput } from '@/ai/schemas';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

export default function TestCronPage() {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [article, setArticle] = useState<GenerateSeoOptimizedBlogArticleOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [savedArticleId, setSavedArticleId] = useState<string | null>(null);

  const onGenerateArticle = async () => {
    setLoading(true);
    setError(null);
    setArticle(null);
    setSavedArticleId(null);

    const result = await handleGenerateArticle();
    if (result.error) {
      setError(result.error);
    } else if (result.article) {
      setArticle(result.article);
    }
    setLoading(false);
  };

  const onSaveArticle = async () => {
    if (!article) return;
    setSaving(true);
    setError(null);
    setSavedArticleId(null);
    
    const result = await handleSaveArticle(article);
    if (result.error) {
      setError(result.error);
    } else if (result.success && result.articleId) {
      setSavedArticleId(result.articleId);
      setArticle(null); // Clear the article from view after saving
    }
    setSaving(false);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Test Scheduled Article Generation</CardTitle>
          <CardDescription>
            Click the button below to manually trigger the daily article generation process. 
            The generated article and image will be displayed for review before you save it to the database.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-start gap-4">
            <Button onClick={onGenerateArticle} disabled={loading || saving}>
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
             {savedArticleId && (
                <div className="w-full p-4 bg-emerald-500/10 border border-emerald-500/50 text-emerald-700 rounded-md">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        <h4 className="font-bold">Article Saved Successfully!</h4>
                    </div>
                    <p className="mt-2">The article has been saved to the database. You can view it here:</p>
                    <Button asChild variant="link" className="p-0 h-auto">
                        <Link href={`/blog/${savedArticleId}`} target="_blank">
                            View Saved Article
                        </Link>
                    </Button>
                </div>
            )}
          </div>
        </CardContent>
      </Card>

      {article && article.title !== 'No article today' && (
        <Card className="mt-8">
            <CardHeader>
                {article.imageUrl && (
                    <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
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
             <CardFooter className="border-t pt-6">
                <Button onClick={onSaveArticle} disabled={saving || loading}>
                    {saving ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                        </>
                    ) : (
                        <>
                            <Save className="mr-2 h-4 w-4" />
                            Save to Database
                        </>
                    )}
                </Button>
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
