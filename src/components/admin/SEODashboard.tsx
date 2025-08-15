
'use client';
import React, { useEffect, useState } from 'react';
import { SEOMonitoringService, SEOMetrics } from '@/services/seo-monitoring';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, TrendingUp, BarChart, FileText, Star, Trophy, Image as ImageIcon, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import UpdateImageDialog from './UpdateImageDialog';
import DeleteArticleDialog from './DeleteArticleDialog';
import type { Article } from '@/types/article';
import { Button } from '../ui/button';

export default function SEODashboard() {
  const [metrics, setMetrics] = useState<SEOMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedArticleForImage, setSelectedArticleForImage] = useState<Article | null>(null);
  const [selectedArticleForDelete, setSelectedArticleForDelete] = useState<Article | null>(null);
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  async function loadMetrics() {
    try {
      setLoading(true);
      const data = await SEOMonitoringService.getDashboardMetrics();
      setMetrics(data);
    } catch (error) {
      console.error('Failed to load metrics:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMetrics();
  }, []);

  const handleUpdateImageClick = (article: Article) => {
    setSelectedArticleForImage(article);
    setIsImageDialogOpen(true);
  };
  
  const handleDeleteClick = (article: Article) => {
    setSelectedArticleForDelete(article);
    setIsDeleteDialogOpen(true);
  };

  const onActionSuccess = () => {
    setIsImageDialogOpen(false);
    setIsDeleteDialogOpen(false);
    setSelectedArticleForImage(null);
    setSelectedArticleForDelete(null);
    loadMetrics(); // Refresh metrics to show changes
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!metrics) {
    return <p>Impossible de charger les données du tableau de bord.</p>;
  }
  
  const formatDate = (date: any): string => {
    if (!date) return 'Inconnue';
    try {
      if (typeof date === 'string') {
        return format(parseISO(date), "dd MMM yyyy", { locale: fr });
      }
      if (typeof date === 'object' && date.seconds) {
        return format(new Date(date.seconds * 1000), "dd MMM yyyy", { locale: fr });
      }
      if (date instanceof Date) {
        return format(date, "dd MMM yyyy", { locale: fr });
      }
    } catch (e) {
      console.error("Error formatting date:", e);
    }
    return "Date invalide";
  };


  return (
    <>
      <div className="space-y-8">
        <Card>
          <CardHeader>
              <CardTitle>Tableau de Bord SEO</CardTitle>
              <CardDescription>Vue d'ensemble de la performance de votre contenu.</CardDescription>
          </CardHeader>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Articles Totaux</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">{metrics.totalArticles}</div>
              </CardContent>
          </Card>
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Score SEO Moyen</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                   <div className="text-2xl font-bold">{metrics.averageSeoScore}/100</div>
                   <Progress value={metrics.averageSeoScore} className="h-2 mt-2" />
              </CardContent>
          </Card>
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Moteur IA</CardTitle>
                  <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                   <div className="text-2xl font-bold">DeepSeek</div>
                   <p className="text-xs text-muted-foreground">pour la génération de contenu</p>
              </CardContent>
          </Card>
        </div>

        {/* Top Performing Articles */}
        <Card>
          <CardHeader>
            <CardTitle>Articles les Plus Performants (par score SEO)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {metrics.topPerformingArticles.map((article, index) => (
                <div key={article.id} className="flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary mr-4">
                    <span className="font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <button onClick={() => handleUpdateImageClick(article)} className="font-medium hover:underline text-left">
                      {article.title}
                    </button>
                    <p className="text-sm text-muted-foreground">{article.category}</p>
                  </div>
                  <div className="text-right flex items-center gap-4">
                    <div className="font-bold">{article.seoScore || 0}/100</div>
                     <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleDeleteClick(article)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* All Articles */}
        <Card>
          <CardHeader>
            <CardTitle>All Articles</CardTitle>
          </CardHeader>
          <CardContent>
             <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Titre</TableHead>
                  <TableHead>Catégorie</TableHead>
                  <TableHead>Score SEO</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {metrics.allArticles.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell className="font-medium">
                       <button onClick={() => handleUpdateImageClick(article)} className="hover:underline text-left">
                        {article.title}
                      </button>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{article.category}</Badge>
                    </TableCell>
                    <TableCell className="font-medium">{article.seoScore || 'N/A'}</TableCell>
                     <TableCell className="text-muted-foreground text-xs">
                       {formatDate(article.createdAt)}
                    </TableCell>
                    <TableCell className="text-right">
                       <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleDeleteClick(article)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {selectedArticleForImage && (
        <UpdateImageDialog
          article={selectedArticleForImage}
          isOpen={isImageDialogOpen}
          setIsOpen={setIsImageDialogOpen}
          onUpdateSuccess={onActionSuccess}
        />
      )}

      {selectedArticleForDelete && (
        <DeleteArticleDialog
          article={selectedArticleForDelete}
          isOpen={isDeleteDialogOpen}
          setIsOpen={setIsDeleteDialogOpen}
          onDeleteSuccess={onActionSuccess}
        />
      )}
    </>
  );
}
