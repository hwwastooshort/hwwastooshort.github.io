import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'> & { slug: string };

/** Published posts of one language, newest first. Drafts are only shown in dev. */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const posts = await getCollection(
    'blog',
    (post) => post.id.startsWith(`${lang}/`) && (import.meta.env.DEV || !post.data.draft),
  );
  return posts
    .map((post) => ({ ...post, slug: post.id.slice(lang.length + 1) }))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** All projects, newest first. */
export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => b.data.year - a.data.year);
}
