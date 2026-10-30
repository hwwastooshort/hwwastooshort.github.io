import type { APIContext } from 'astro';
import { rssResponse } from '../../lib/rss';

export const GET = (context: APIContext) => rssResponse(context, 'en');
