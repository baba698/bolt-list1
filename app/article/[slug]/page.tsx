import { fetchArticles } from '@/lib/rss';
import { notFound } from 'next/navigation';
import ArticleContent from '@/components/ArticleContent';
import CommentSection from '@/components/CommentSection';

export async function generateStaticParams() {
  const articles = await fetchArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const articles = await fetchArticles();
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <ArticleContent article={article} />
      <CommentSection articleId={article.slug} />
    </div>
  );
}