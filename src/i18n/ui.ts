export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

export const ui = {
  de: {
    'nav.about': 'Über mich',
    'nav.projects': 'Projekte',
    'nav.cv': 'Lebenslauf',
    'nav.blog': 'Blog',
    'projects.title': 'Projekte',
    'projects.intro': 'Eine Auswahl an Dingen, die ich gebaut habe.',
    'projects.wip': 'in Arbeit',
    'blog.title': 'Blog',
    'blog.intro': 'Notizen und Gedanken rund um Softwareentwicklung.',
    'blog.empty': 'Noch keine Beiträge.',
    'blog.back': 'Alle Beiträge',
    'cv.experience': 'Berufserfahrung',
    'cv.education': 'Ausbildung',
    'cv.skills': 'Kenntnisse',
    'cv.download': 'Lebenslauf als PDF',
    'cv.present': 'heute',
    'about.title': 'Über mich',
    'notFound.title': 'Seite nicht gefunden',
    'notFound.text': 'Diese Seite existiert nicht (mehr).',
    'notFound.home': 'Zur Startseite',
    'theme.toggle': 'Farbschema wechseln',
    'lang.switch': 'Switch to English',
    'skip': 'Zum Inhalt springen',
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.cv': 'CV',
    'nav.blog': 'Blog',
    'projects.title': 'Projects',
    'projects.intro': 'A selection of things I have built.',
    'projects.wip': 'in progress',
    'blog.title': 'Blog',
    'blog.intro': 'Notes and thoughts on software development.',
    'blog.empty': 'No posts yet.',
    'blog.back': 'All posts',
    'cv.experience': 'Experience',
    'cv.education': 'Education',
    'cv.skills': 'Skills',
    'cv.download': 'Download CV as PDF',
    'cv.present': 'present',
    'about.title': 'About',
    'notFound.title': 'Page not found',
    'notFound.text': 'This page does not exist (anymore).',
    'notFound.home': 'Back to home',
    'theme.toggle': 'Toggle color scheme',
    'lang.switch': 'Auf Deutsch wechseln',
    'skip': 'Skip to content',
  },
} as const;

export type UiKey = keyof (typeof ui)['de'];

export function useTranslations(lang: Lang) {
  return (key: UiKey) => ui[lang][key];
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Path without base, e.g. "/en/blog/foo" */
function stripBase(pathname: string) {
  return base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = stripBase(url.pathname).split('/');
  return first === 'en' ? 'en' : 'de';
}

/** Build an internal link for a language, e.g. localizePath('/blog', 'en') -> "<base>/en/blog" */
export function localizePath(path: string, lang: Lang) {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return `${base}${prefix}${clean}` || '/';
}

/** The same page in the other language. */
export function switchLangPath(url: URL, target: Lang) {
  const path = stripBase(url.pathname).replace(/^\/en(?=\/|$)/, '') || '/';
  return localizePath(path, target);
}

export function formatDate(date: Date, lang: Lang, opts: Intl.DateTimeFormatOptions = {}) {
  return date.toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...opts,
  });
}
