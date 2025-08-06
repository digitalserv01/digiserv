'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { handleGenerateAndSaveArticle } from './actions';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function TestCronPage() {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string | null>(null);
  const [articleId, setArticleId] = useState<string | null>(null);
  
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user || user.uid !== process.env.NEXT_PUBLIC_ADMIN_ID) {
        router.push('/');
      }
    }
  }, [user, loading, router]);

  const onGenerateAndSave = async () => {
    setState('loading');
    setMessage(null);
    setArticleId(null);

    const result = await handleGenerateAndSaveArticle();
    
    setMessage(result.message);
    if (result.success && result.articleId) {
      setState('success');
      setArticleId(result.articleId);
    } else {
      setState('error');
    }
  };

  if (loading || !user) {
    return (
        <div className="flex h-screen items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
        </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Test de Génération d'Article</CardTitle>
          <CardDescription>
            Cette page vous permet de déclencher manuellement le processus complet de génération et de sauvegarde d'articles, identique à la tâche cron.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={onGenerateAndSave} disabled={state === 'loading'}>
            {state === 'loading' ? (
              <><Loader2 className="animate-spin" /> En cours...</>
            ) : (
              <><Wand /> Générer & Sauvegarder l'Article</>
            )}
          </Button>

          {state === 'error' && message && (
              <div className="mt-4 w-full p-4 bg-destructive/10 border border-destructive/50 text-destructive rounded-md flex items-center gap-2">
                <AlertCircle className="h-5 w-5"/>
                <div>
                  <h4 className="font-bold">Erreur</h4>
                  <p>{message}</p>
                </div>
              </div>
          )}

          {state === 'success' && message && (
             <Card className="mt-4 border-emerald-500 bg-emerald-500/10">
                <CardContent className="p-4">
                    <div className="flex items-center gap-3 text-emerald-700">
                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold">Succès !</h4>
                            <p className="text-sm">{message}</p>
                            {articleId && (
                                <Button asChild variant="link" className="p-0 h-auto text-emerald-700">
                                    <Link href={`/blog/${articleId}`} target="_blank">
                                        Voir l'article sauvegardé <ExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
          )}

        </CardContent>
      </Card>
    </div>
  );
}
