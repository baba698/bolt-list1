import Parser from 'rss-parser';
import { Article } from './types';

const parser = new Parser();

const RSS_FEEDS = [
  { url: 'http://feeds.bbci.co.uk/news/rss.xml', source: 'BBC' },
  { url: 'https://www.channelnewsasia.com/rssfeeds/8395986', source: 'CNA' },
  { url: 'https://rss.dw.com/xml/rss-en-all', source: 'DW' },
  { url: 'https://english.kyodonews.net/rss/news.xml', source: 'Kyodo News' },
  { url: 'https://www.rfa.org/english/feed/rss2.xml', source: 'RFA' },
  { url: 'https://feeds.a.dj.com/rss/RSSWorldNews.xml', source: 'WSJ' },
];

export async function fetchArticles(): Promise<Article[]> {
  const articlesPromises = RSS_FEEDS.map(async (feed) => {
    try {
      const feedContent = await parser.parseURL(feed.url);
      return feedContent.items.map((item: any) => ({
        title: item.title,
        description: item.contentSnippet || item.description,
        content: item.content,
        pubDate: item.pubDate,
        link: item.link,
        source: feed.source,
        slug: item.guid || encodeURIComponent(item.title),
        category: item.categories?.[0] || 'Uncategorized',
      }));
    } catch (error) {
      console.error(`Error fetching ${feed.source} RSS feed:`, error);
      return [];
    }
  });

  const articlesArrays = await Promise.all(articlesPromises);
  const allArticles = articlesArrays.flat();

  return allArticles.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
}