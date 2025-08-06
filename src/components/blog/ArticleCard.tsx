'use client';
import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MessageCircle, Clock, FileText } from 'lucide-react';
import type { Article } from '@/types/article';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

interface ArticleCardProps {
  article: Article;
}

const categoryDisplayName: { [key: string]: string } = {
  'cv-emploi': 'CV & Emploi',
  'developpement-web': 'Développement Web',
  'marketing-digital': 'Marketing Digital',
  'ecommerce': 'E-commerce',
  'ia-automation': 'IA & Automation',
};

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  const whatsappUrl = `https://wa.me/212699020158?text=Bonjour%20!%20J'ai%20lu%20votre%20article%20'${encodeURIComponent(article.title)}'%20et%20je%20suis%20int%C3%A9ress%C3%A9(e).`;

  const getCategoryName = (slug: string) => categoryDisplayName[slug] || slug;

  const getArticleDate = () => {
    if (!article.createdAt) return "Date inconnue";
    try {
        let date: Date;
        if (typeof article.createdAt === 'string') {
            date = parseISO(article.createdAt);
        } else if (typeof article.createdAt === 'object' && 'seconds' in article.createdAt) {
            // This handles the case where it might be a Firestore-like Timestamp object on the client
            date = new Date((article.createdAt as any).seconds * 1000);
        } else {
             throw new Error("Unsupported date format");
        }
        return format(date, "d MMM yyyy", { locale: fr });
    } catch (error) {
        console.error("Invalid date format in ArticleCard:", article.createdAt, error);
        return "Date invalide";
    }
  };

  return (
    <Card className="flex h-full flex-col overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl group">
      <Link href={`/blog/${article.id}`} className="flex flex-col flex-1">
        <div className="relative overflow-hidden aspect-[16/9]">
          <Image
            src={article.imageUrl || `https://placehold.co/400x225.png?text=${encodeURIComponent(getCategoryName(article.category))}`}
            alt={article.title}
            fill
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={article.category.replace(/-/g, ' ')}
          />
        </div>

        <CardContent className="flex flex-1 flex-col p-6">
          <div className="flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2">
              <Badge variant="secondary" className="text-xs font-medium">
                {getCategoryName(article.category)}
              </Badge>
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="mr-1.5 h-3 w-3" />
                {getArticleDate()}
              </div>
            </div>

            <h3 className="mb-3 font-headline text-lg font-bold text-primary transition-colors group-hover:text-accent">
              {article.title}
            </h3>

            <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
              {article.metaDescription}
            </p>
          </div>

          <div className="mt-auto space-y-3 pt-4 border-t">
             <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>{article.wordCount} mots</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readingTime}</span>
              </div>
            </div>
            
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              {article.ctaButton || "En savoir plus"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Link>
      <div className="p-6 pt-0">
          <Button asChild variant="ghost" className="w-full text-sm text-muted-foreground hover:bg-secondary">
            <Link href={whatsappUrl} target="_blank" onClick={(e) => e.stopPropagation()}>
              <MessageCircle className="mr-2 h-4 w-4 text-whatsapp" />
              Discuter sur WhatsApp
            </Link>
          </Button>
      </div>
    </Card>
  );
};

export default ArticleCard;
