import React from 'react';
import ArticleCard from '@/components/blog/ArticleCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Article } from '@/types/article';
import Link from 'next/link';

interface BlogSectionProps {
  articles: Article[];
}

export default function BlogSection({ articles }: BlogSectionProps) {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold font-headline text-primary mb-2">Derniers Conseils</h2>
          <p className="text-lg text-muted-foreground">Guides pratiques et stratégies éprouvées.</p>
        </div>
        <Link href="/blog">
          <Button variant="outline" className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Voir tout <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/blog">
          <Button variant="outline" className="sm:hidden border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Voir tous les articles <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
