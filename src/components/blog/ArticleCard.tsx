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
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(`Bonjour ! J'ai lu votre article "${article.title}" et je suis intéressé par votre service. Pourriez-vous m'en dire plus ?`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const getCategoryName = (slug: string) => categoryDisplayName[slug] || slug;

  const getArticleDate = () => {
    if (article.createdAt) {
        try {
            return format(parseISO(article.createdAt), "d MMM yyyy", { locale: fr });
        } catch (error) {
            console.error("Invalid date format:", article.createdAt, error);
            return "Date inconnue";
        }
    }
    return "Date inconnue";
  }

  return (
    <Link href={`/blog/${article.id}`} className="group">
      <Card className="flex h-full flex-col overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl">
        <div className="relative overflow-hidden">
          <Image
            src={`https://placehold.co/400x225.png?text=${encodeURIComponent(getCategoryName(article.category))}`}
            alt={article.title}
            width={400}
            height={225}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
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

          <div className="mt-auto space-y-3 pt-4">
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

            <Button variant="ghost" className="w-full text-sm text-muted-foreground hover:bg-secondary" onClick={handleWhatsAppClick}>
              <MessageCircle className="mr-2 h-4 w-4 text-whatsapp" />
              Discuter sur WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
