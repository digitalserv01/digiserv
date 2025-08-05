'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Save, Wand, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { handleGenerateArticle, handleSaveArticle } from './actions';
import type { GenerateSeoOptimizedBlogArticleOutput } from '@/ai/schemas';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

export default function TestCronPage() {
  const [generationState, setGenerationState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [saveState, setSaveState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const [article, setArticle] = useState<GenerateSeoOptimizedBlogArticleOutput | null>(null);
  const [articleId, setArticleId] = useState<string | null>(null);
  
  const [error, setError] = useState<string | null>(null);
  
  const onGenerateArticle = async () => {
    setGenerationState('loading');
    setSaveState('idle');
    setError(null);
    setArticle(null);
    setArticleId(null);

    const result = await handleGenerateArticle();
    
    if (result.error) {
      setError(result.error);
      setGenerationState('error');
    } else if (result.article) {
      if (result.article.title === 'No article today') {
        setArticle(result.article)
        setGenerationState('success');
      } else {
        setArticle(result.article);
        setGenerationState('success');
      }
    }
    
  };

  const onSaveArticle = async () => {
    if (!article) return;
    
    setSaveState('loading');
    setError(null);
    const result = await handleSaveArticle(article);

    if (result.error || !result.success) {
      setError(result.error || 'An unknown error occurred while saving.');
      setSaveState('error');
    } else {
      setArticleId(result.articleId!);
      setSaveState('success');
    }
  }


  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Test Article Generation & Saving</CardTitle>
          <CardDescription>
            This page allows you to manually test the AI article generation. 
            First, generate the article to preview it. Then, save it to the database.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button onClick={onGenerateArticle} disabled={generationState === 'loading'}>
              {generationState === 'loading' ? (
                <><Loader2 className="animate-spin" /> Generating...</>
              ) : (
                <><Wand /> Generate Article</>
              )}
            </Button>

             <Button onClick={onSaveArticle} disabled={!article || article.title === 'No article today' || saveState === 'loading' || generationState !== 'success'}>
              {saveState === 'loading' ? (
                 <><Loader2 className="animate-spin" /> Saving...</>
              ) : (
                 <><Save /> Save to Database</>
              )}
            </Button>
            
          </div>
          {error && (
              <div className="mt-4 w-full p-4 bg-destructive/10 border border-destructive/50 text-destructive rounded-md flex items-center gap-2">
                <AlertCircle className="h-5 w-5"/>
                <div>
                  <h4 className="font-bold">Error</h4>
                  <p>{error}</p>
                </div>
              </div>
            )}
        </CardContent>
      </Card>
      
      {saveState === 'success' && articleId && (
        <Card className="mt-4 border-emerald-500 bg-emerald-500/10">
            <CardContent className="p-4">
                <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle className="h-5 w-5" />
                    <div>
                        <h4 className="font-bold">Article Saved Successfully!</h4>
                        <p className="text-sm">Firestore Document ID: {articleId}</p>
                         <Button asChild variant="link" className="p-0 h-auto text-emerald-700">
                            <Link href={`/blog/${articleId}`} target="_blank">
                                View Saved Article <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
      )}


      {generationState === 'success' && article && article.title !== 'No article today' && (
        <Card className="mt-8">
            <CardHeader>
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
                    <FileText />
                    <span>{article.wordCount} words</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock />
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
                <Bot className="text-primary" />
                <h4 className="font-semibold text-primary">Call to Action</h4>
                </div>
                <p className="text-muted-foreground">{article.ctaText}</p>
                <Button>{article.ctaButton}</Button>
            </CardFooter>
        </Card>
      )}
       {generationState === 'success' && article && article.title === 'No article today' && (
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
