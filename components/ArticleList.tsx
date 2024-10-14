import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Article } from '@/lib/types';

export default function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <Card key={article.slug}>
          <CardHeader>
            <CardTitle>{article.title}</CardTitle>
          </CardHeader>
          <CardContent>
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