'use client';
import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';

interface ArticleCardProps {
  article: {
    id: number;
    category: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    oldPrice: string;
    newPrice: string;
    savings: string;
    ctaText: string;
    badgeText: string;
    badgeType: 'popular' | 'new' | 'limited' | 'recommended' | 'trend' | 'expert';
    aiHint: string;
  };
}

const badgeStyles = {
  popular: 'bg-accent text-accent-foreground',
  new: 'bg-emerald-500 text-white',
  limited: 'bg-red-500 text-white animate-pulse',
  recommended: 'bg-blue-500 text-white',
  trend: 'bg-purple-500 text-white',
  expert: 'bg-primary text-primary-foreground',
};

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Bonjour ! J'ai lu votre article sur "${article.title}" et je suis intéressé par le service "${article.ctaText}". Pourriez-vous m'en dire plus ?`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <Card className="flex h-full flex-col overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          width={400}
          height={225}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={article.aiHint}
        />
        <div className="absolute top-4 left-4">
          <Badge className={badgeStyles[article.badgeType]}>
            {article.badgeText}
          </Badge>
        </div>
      </div>

      <CardContent className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="text-xs font-medium">
              {article.category}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              {article.date}
            </div>
          </div>

          <h3 className="mb-3 font-headline text-lg font-bold text-primary transition-colors group-hover:text-accent">
            {article.title}
          </h3>

          <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-accent">{article.newPrice}</span>
              <span className="text-sm text-muted-foreground line-through">{article.oldPrice}</span>
            </div>
            <Badge variant="outline" className="border-emerald-500/50 bg-emerald-500/10 text-emerald-700">
              Économisez {article.savings}
            </Badge>
          </div>

          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            {article.ctaText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button variant="ghost" className="w-full text-sm text-muted-foreground hover:bg-secondary" onClick={handleWhatsAppClick}>
            <MessageCircle className="mr-2 h-4 w-4 text-whatsapp" />
            Discuter sur WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
