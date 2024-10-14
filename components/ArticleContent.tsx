import { Article } from '@/lib/types';

export default function ArticleContent({ article }: { article: Article }) {
  return (
    <article className="prose lg:prose-xl dark:prose-invert mx-auto">
      <h1>{article.title}</h1>
      <p className="text-sm text-muted-foreground">
        {article.source} - {new Date(article.pubDate).toLocaleDateString()}
      </p>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
}