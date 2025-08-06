import { doc, getDoc, collection, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Article, ArticleDocument } from '@/types/article';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, FileText, Bot } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import Link from 'next/link';

interface ArticlePageProps {
  params: {
    id: string;
  };
}

async function getArticle(id: string): Promise<Article | null> {
  const docRef = doc(db, 'articles', id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }
  
  const data = docSnap.data() as ArticleDocument;

  return { 
      id: docSnap.id, 
      ...data,
      createdAt: data.createdAt?.toJSON() || new Date().toJSON(),
      // Ensure imageUrl is always a string, provide fallback
      imageUrl: data.imageUrl || 'https://placehold.co/1200x600.png',
  };
}

export async function generateStaticParams() {
  try {
    const articlesCol = collection(db, 'articles');
    const articlesSnapshot = await getDocs(articlesCol);
    return articlesSnapshot.docs.map(doc => ({
      id: doc.id,
    }));
  } catch (error) {
    console.error("Error fetching static params for articles:", error)
    return [];
  }
}

const categoryDisplayName: { [key: string]: string } = {
  'cv-emploi': 'CV & Emploi',
  'developpement-web': 'Développement Web',
  'marketing-digital': 'Marketing Digital',
  'ecommerce': 'E-commerce',
  'ia-automation': 'IA & Automation',
};
const getCategoryName = (slug: string) => categoryDisplayName[slug] || slug;


export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticle(params.id);

  if (!article) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/212699020158?text=Bonjour%20!%20J'ai%20lu%20votre%20article%20'${encodeURIComponent(article.title)}'%20et%20je%20suis%20int%C3%A9ress%C3%A9(e).`;

  const getArticleDate = () => {
    if (!article.createdAt) return "Date inconnue";
    try {
        let date: Date;
        if (typeof article.createdAt === 'string') {
            date = parseISO(article.createdAt);
        } else if (typeof article.createdAt === 'object' && 'seconds' in article.createdAt) {
            // This handles the case where it might be a Firestore-like Timestamp object on the client
            date = new Date((article.createdAt as any).seconds * 1000);
        } else if (article.createdAt instanceof Date) {
            date = article.createdAt;
        } else {
            throw new Error("Unsupported date format");
        }
        return format(date, "dd MMMM yyyy", { locale: fr });
    } catch (error) {
        console.error("Invalid date format in ArticlePage:", article.createdAt, error);
        return "Date invalide";
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.amadigiconseils.com/blog/${article.id}`,
    },
    headline: article.title,
    description: article.metaDescription,
    image: article.imageUrl,
    author: {
      '@type': 'Organization',
      name: 'AmadiDigiConseils',
      url: 'https://www.amadigiconseils.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AmadiDigiConseils',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.amadigiconseils.com/logo.png', // You should have a logo file
      },
    },
    datePublished: article.createdAt,
    dateModified: article.createdAt,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <main className="lg:col-span-8 xl:col-span-9">
            <Card className="overflow-hidden">
              <div className="relative w-full aspect-video">
                  <Image 
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover"
                      priority
                  />
              </div>
              <CardHeader className="flex-col items-start gap-4">
                <div>
                  <Badge variant="secondary">{getCategoryName(article.category)}</Badge>
                </div>
                <CardTitle className="font-headline text-3xl lg:text-4xl text-primary !leading-tight">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {article.metaDescription}
                </CardDescription>

                <div className="w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground pt-4 border-t">
                   <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Publié le {getArticleDate()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>{article.wordCount} mots</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{article.readingTime}</span>
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
                  <h4 className="font-semibold text-lg text-primary">Prêt à passer à l'action ?</h4>
                </div>
                <p className="text-muted-foreground">{article.ctaText}</p>
                <Button size="lg" asChild>
                  <Link href={whatsappUrl} target="_blank">
                    {article.ctaButton}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </main>
          
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-24 space-y-8">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
