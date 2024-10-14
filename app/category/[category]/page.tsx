import { fetchArticles } from '@/lib/rss';
import ArticleList from '@/components/ArticleList';

export async function generateStaticParams() {
  const articles = await fetchArticles();
  const categories = [...new Set(articles.map((article) => article.category))];
  return categories.map((category) => ({
    category: category,
  }));
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const articles = await fetchArticles();
  const categoryArticles = articles.filter((article) => article.category === params.category);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Category: {params.category}</h1>
      <ArticleList articles={categoryArticles} />
    </div>
  );
}