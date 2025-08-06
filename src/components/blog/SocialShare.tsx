'use client';

import { Button } from '@/components/ui/button';
import { Linkedin, Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SocialShareProps {
  articleTitle: string;
  articleUrl: string;
}

export default function SocialShare({ articleTitle, articleUrl }: SocialShareProps) {
  const { toast } = useToast();

  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(articleTitle);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(articleUrl);
    toast({
      title: 'Lien copié !',
      description: 'Le lien de l\'article a été copié dans votre presse-papiers.',
    });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
        <h4 className="text-sm font-semibold text-muted-foreground">Partager cet article :</h4>
        <div className="flex gap-2">
            <Button variant="outline" size="icon" asChild>
                <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Partager sur LinkedIn">
                    <Linkedin className="h-4 w-4" />
                </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
                <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Partager sur Facebook">
                    <Facebook className="h-4 w-4" />
                </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
                <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Partager sur Twitter">
                    <Twitter className="h-4 w-4" />
                </a>
            </Button>
            <Button variant="outline" size="icon" onClick={copyToClipboard} aria-label="Copier le lien">
                <LinkIcon className="h-4 w-4" />
            </Button>
        </div>
    </div>
  );
}
