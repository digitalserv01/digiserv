import { collection, getDocs, limit, orderBy, query, startAfter, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Article, ArticleDocument } from '@/types/article';
import ArticleCard from '@/components/blog/ArticleCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ARTICLES_PER_PAGE = 10;

interface BlogPageProps {
  searchParams: {
    page?: string;
  }
}

async function getArticles(page = 1) {
  const articlesCol = collection(db, 'articles');
  let q;

  if (page > 1) {
    // For pagination, we need to get the last document of the previous page
    const prevPageQuery = query(articlesCol, orderBy('createdAt', 'desc'), limit(ARTICLES_PER_PAGE * (page - 1)));
    const prevPageSnapshot = await getDocs(prevPageQuery);
    const lastVisible = prevPageSnapshot.docs[prevPageSnapshot.docs.length - 1];
    q = query(articlesCol, orderBy('createdAt', 'desc'), startAfter(lastVisible), limit(ARTICLES_PER_PAGE));
  } else {
    q = query(articlesCol, orderBy('createdAt', 'desc'), limit(ARTICLES_PER_PAGE));
  }

  const articlesSnapshot = await getDocs(q);
  const articles: Article[] = articlesSnapshot.docs.map(doc => {
    const data = doc.data() as ArticleDocument;
    return {
      id: doc.id,
      ...data,
      createdAt: data.createdAt.toJSON(),
    };
  });

  const totalArticlesQuery = query(articlesCol);
  const totalArticlesSnapshot = await getDocs(totalArticlesQuery);
  const totalArticles = totalArticlesSnapshot.size;

  return { articles, totalArticles };
}


export default async function BlogPage({ searchParams }: BlogPageProps) {
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const { articles, totalArticles } = await getArticles(page);
  const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold font-headline text-primary">Notre Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Découvrez nos conseils, guides et analyses pour accélérer votre transformation digitale.
        </p>
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
          <p className="text-muted-foreground mt-2">Revenez bientôt pour de nouveaux contenus !</p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-16">
          <Button asChild variant="outline" disabled={page <= 1}>
            <Link href={`/blog?page=${page - 1}`}>Précédent</Link>
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {page} sur {totalPages}
          </span>
          <Button asChild variant="outline" disabled={page >= totalPages}>
            <Link href={`/blog?page=${page + 1}`}>Suivant</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
