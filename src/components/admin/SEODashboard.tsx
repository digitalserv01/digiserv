'use client';
import React, { useEffect, useState } from 'react';
import { SEOMonitoringService, SEOMetrics } from '@/services/seo-monitoring';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, TrendingUp, BarChart, FileText, Star, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function SEODashboard() {
  const [metrics, setMetrics] = useState<SEOMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    loadMetrics();
  }, []);

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

  return (
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
                  <Link href={`/blog/${article.slug}`} className="font-medium hover:underline" target="_blank">
                    {article.title}
                  </Link>
                  <p className="text-sm text-muted-foreground">{article.category}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold">{article.seoScore || 0}/100</div>
                  <div className="text-xs text-muted-foreground">Score SEO</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Articles */}
      <Card>
        <CardHeader>
          <CardTitle>Articles Récents</CardTitle>
        </CardHeader>
        <CardContent>
           <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Titre</TableHead>
                <TableHead>Catégorie</TableHead>
                <TableHead className="text-right">Score SEO</TableHead>
                <TableHead className="text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {metrics.recentArticles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell className="font-medium">
                    <Link href={`/blog/${article.slug}`} className="hover:underline" target="_blank">
                      {article.title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{article.category}</Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium">{article.seoScore || 'N/A'}</TableCell>
                   <TableCell className="text-right text-muted-foreground text-xs">
                     {format(parseISO(article.createdAt), "dd MMM yyyy", { locale: fr })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
