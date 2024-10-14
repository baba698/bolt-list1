import FeaturedArticles from '@/components/FeaturedArticles';
import ArticleList from '@/components/ArticleList';
import { fetchArticles } from '@/lib/rss';

export default async function Home() {
  const articles = await fetchArticles();
  const featuredArticles = articles.slice(0, 5);
  const remainingArticles = articles.slice(5);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Latest News</h1>
      <FeaturedArticles articles={featuredArticles} />
      <ArticleList articles={remainingArticles} />
    </div>
  );
}