'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { handleGenerateAndSaveArticle } from './actions';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import SEODashboard from '@/components/admin/SEODashboard';

export default function TestCronPage() {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string | null>(null);
  const [key, setKey] = useState(0); // Add key to force re-render of dashboard
  
  const { user, loading } = useAuth();
  const router = useRouter();
  const adminId = process.env.NEXT_PUBLIC_ADMIN_ID;

  useEffect(() => {
    if (loading) {
      return; // Wait until authentication state is resolved
    }
    
    // Explicitly define adminId to avoid timing issues
    const adminIdEnv = process.env.NEXT_PUBLIC_ADMIN_ID;

    // If loading is finished, but there's no adminId configured or the user doesn't match, redirect.
    if (!adminIdEnv || !user || user.uid !== adminIdEnv) {
      router.push('/login');
    }
  }, [user, loading, router, adminId]);

  const onGenerateAndSave = async () => {
    setState('loading');
    setMessage(null);

    const result = await handleGenerateAndSaveArticle();
    
    setMessage(result.message);
    if (result.success) {
      setState('success');
      // Refresh the dashboard by changing its key
       setKey(prevKey => prevKey + 1);
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
  
  const adminIdEnv = process.env.NEXT_PUBLIC_ADMIN_ID;
  if (!adminIdEnv || user.uid !== adminIdEnv) {
     return (
        <div className="flex h-screen items-center justify-center">
            <p>Access Denied.</p>
        </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Test AI Flow</CardTitle>
              <CardDescription>
                Trigger the AI flow to generate daily articles and see the results or errors.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={onGenerateAndSave} disabled={state === 'loading'} className="w-full">
                {state === 'loading' ? (
                  <><Loader2 className="animate-spin" /> En cours...</>
                ) : (
                  <><Wand /> Test AI Flow</>
                )}
              </Button>

              {state === 'error' && message && (
                  <div className="mt-4 w-full p-4 bg-destructive/10 border border-destructive/50 text-destructive rounded-md flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 mt-1 flex-shrink-0"/>
                    <div>
                      <h4 className="font-bold">Erreur de Génération</h4>
                      <p className="text-sm break-words">{message}</p>
                    </div>
                  </div>
              )}

              {state === 'success' && message && (
                 <Card className="mt-4 border-emerald-500 bg-emerald-500/10">
                    <CardContent className="p-4">
                        <div className="flex items-start gap-3 text-emerald-700">
                            <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold">Succès !</h4>
                                <p className="text-sm">{message}</p>
                                <Button asChild variant="link" className="p-0 h-auto text-emerald-700">
                                    <Link href={`/blog`} target="_blank">
                                        Voir les nouveaux articles <ExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
              )}

            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2">
           <SEODashboard key={key} />
        </div>
      </div>
    </div>
  );
}
