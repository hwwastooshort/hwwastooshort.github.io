import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../data/site';
import { localizePath, useTranslations, type Lang } from '../i18n/ui';
import { getPosts } from './content';

export async function rssResponse(context: APIContext, lang: Lang) {
  const t = useTranslations(lang);
  const posts = await getPosts(lang);
  return rss({
    title: `${site.name} · ${t('blog.title')}`,
    description: t('blog.intro'),
    site: new URL(import.meta.env.BASE_URL, context.site),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: localizePath(`/blog/${post.slug}`, lang),
    })),
    customData: `<language>${lang}</language>`,
  });
}
