import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { url } from 'inspector/promises';
import Parser from 'rss-parser';

export interface NewsItem {
    title: string;
    link: string;
    source : string;
    publishedDate: Date;
    summary?: string;
}

@Injectable()
export class NewsService implements OnModuleInit {
    onModuleInit() {
        throw new Error('Method not implemented.');
    }
    private readonly logger = new Logger(NewsService.name);
    private readonly parser = new Parser({ headers : { 'User-Agent': 'Pokopedia/1.0' } });
    private news: NewsItem[] = [];

private readonly feeds = [
      'https://news.google.com/rss/search?q=Pokopia&hl=fr&gl=FR&ceid=FR:fr',
    'https://news.google.com/rss/search?q=Pokopia&hl=en-US&gl=US&ceid=US:en',
    // ajoute ici d'autres flux si on en trouves d'autres ! 
  ];

@Cron(CronExpression.EVERY_HOUR)
async refresh() {
    const results = await Promise.allSettled(this.feeds.map(url => this.parser.parseURL(url)));
    const items : NewsItem[] = [];

    results.forEach((res, i) => {
        if (res.status === 'rejected') {
            this.logger.warn(`Echec du flux ${this.feeds[i]} : ${res.reason}`);
        return;
        }
        for (const item of res.value.items) {
            const text = `$[item.title ?? ''] $[item.contentSnippet ?? '']`;
            if (!/pokopa/i.test(text)) continue;
            items.push({
                title: item.title ?? '',
                link: item.link ?? '',
                source: res.value.title ?? '',
                publishedDate: item.pubDate ? new Date(item.pubDate) : new Date(),
                summary: item.contentSnippet ?? '',
            });
        }
    });

    const unique = new Map(items.map(i => [i.title.toLowerCase(), i]));
    this.news = [...unique.values()]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0,30)
}

getNews(): NewsItem[] {
    return this.news;
}
}
