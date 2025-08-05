import { collection, getDocs, limit, orderBy, query, startAfter, Timestamp, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Article, ArticleDocument } from '@/types/article';
import ArticleCard from '@/components/blog/ArticleCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ARTICLES_PER_PAGE = 9;

interface BlogPageProps {
  searchParams: {
    page?: string;
    category?: string;
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


async function getArticles(page = 1, category?: string) {
  const articlesCol = collection(db, 'articles');
  
  let articles: Article[] = [];
  let totalArticles = 0;

  if (category) {
    // Query by category first, then sort in code to avoid composite index requirement for now
    const categoryQuery = query(articlesCol, where('category', '==', category));
    const snapshot = await getDocs(categoryQuery);
    const allCategoryArticles = snapshot.docs.map(doc => {
        const data = doc.data() as ArticleDocument;
        return {
            id: doc.id,
            ...data,
            createdAt: data.createdAt?.toJSON() || new Date().toJSON(),
            imageUrl: data.imageUrl || `https://placehold.co/400x225.png?text=${encodeURIComponent(getCategoryName(data.category))}`,
        };
    });

    // Sort by date manually
    allCategoryArticles.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    totalArticles = allCategoryArticles.length;
    const startIndex = (page - 1) * ARTICLES_PER_PAGE;
    const endIndex = startIndex + ARTICLES_PER_PAGE;
    articles = allCategoryArticles.slice(startIndex, endIndex);

  } else {
    // Original logic for when there's no category filter
    const totalQuery = query(articlesCol);
    const totalSnapshot = await getDocs(totalQuery);
    totalArticles = totalSnapshot.size;

    let paginatedQuery = query(articlesCol, orderBy('createdAt', 'desc'), limit(ARTICLES_PER_PAGE));

    if (page > 1) {
      const prevPageLimit = ARTICLES_PER_PAGE * (page - 1);
      const prevPageQuery = query(articlesCol, orderBy('createdAt', 'desc'), limit(prevPageLimit));
      const prevPageSnapshot = await getDocs(prevPageQuery);
      const lastVisible = prevPageSnapshot.docs[prevPageSnapshot.docs.length - 1];
      
      if(lastVisible) {
         paginatedQuery = query(articlesCol, orderBy('createdAt', 'desc'), startAfter(lastVisible), limit(ARTICLES_PER_PAGE));
      }
    }
    
    const articlesSnapshot = await getDocs(paginatedQuery);
    articles = articlesSnapshot.docs.map(doc => {
      const data = doc.data() as ArticleDocument;
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toJSON() || new Date().toJSON(),
        imageUrl: data.imageUrl || `https://placehold.co/400x225.png?text=${encodeURIComponent(getCategoryName(data.category))}`,
      };
    });
  }


  return { articles, totalArticles };
}


export default async function BlogPage({ searchParams }: BlogPageProps) {
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const category = searchParams.category;
  const { articles, totalArticles } = await getArticles(page, category);
  const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE);

  const pageTitle = category ? `Catégorie : ${getCategoryName(category)}` : "Notre Blog";
  const pageDescription = category 
    ? `Parcourez tous les articles dans la catégorie "${getCategoryName(category)}".`
    : "Découvrez nos conseils, guides et analyses pour accélérer votre transformation digitale.";

  const createPageURL = (p: number) => {
    const params = new URLSearchParams();
    if(category) params.set('category', category);
    if(p > 1) params.set('page', p.toString());
    return `/blog?${params.toString()}`;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold font-headline text-primary">{pageTitle}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {pageDescription}
        </p>
        {category && (
            <Button asChild variant="link" className="mt-4">
                <Link href="/blog">Voir tous les articles</Link>
            </Button>
        )}
      </header>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold">Aucun article trouvé</h2>
          <p className="text-muted-foreground mt-2">
            {category ? `Il n'y a pas encore d'articles dans cette catégorie.` : `Revenez bientôt pour de nouveaux contenus !`}
          </p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-16">
          <Button asChild variant="outline" disabled={page <= 1}>
            <Link href={createPageURL(page - 1)}>Précédent</Link>
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {page} sur {totalPages}
          </span>
          <Button asChild variant="outline" disabled={page >= totalPages}>
            <Link href={createPageURL(page + 1)}>Suivant</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
