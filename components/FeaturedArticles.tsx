import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Article } from '@/lib/types';

export default function FeaturedArticles({ articles }: { articles: Article[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {articles.map((article) => (
        <Card key={article.slug} className="flex flex-col">
          <CardHeader>
            <CardTitle>{article.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground mb-2">{article.source} - {new Date(article.pubDate).toLocaleDateString()}</p>
            <p>{article.description}</p>
          </CardContent>
          <CardFooter>
            <Link href={`/article/${article.slug}`} className="text-primary hover:underline">Read more</Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}