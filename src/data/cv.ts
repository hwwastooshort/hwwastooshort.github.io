type Localized = { de: string; en: string };

export interface CvEntry {
  title: Localized;
  org?: string;
  location?: string;
  /** "YYYY" or "YYYY-MM" */
  start: string;
  /** "YYYY" or "YYYY-MM", or undefined for ongoing */
  end?: string;
  points?: { de: string[]; en: string[] };
  stack?: string[];
}

export interface SkillGroup {
  label: Localized;
  items: string[] | { de: string[]; en: string[] };
}

// Newest first.
export const experience: CvEntry[] = [
  {
    title: { de: 'Software Engineer (Werkstudent)', en: 'Software Engineer (working student)' },
    org: 'EUROKEY Software GmbH',
    start: '2026-03',
    stack: ['TypeScript', 'PostgreSQL', 'Docker'],
  },
  {
    title: {
      de: 'Nachhilfelehrer für Mathematik, Informatik und Englisch',
      en: 'Tutor for Mathematics, Computer Science and English',
    },
    start: '2019',
    end: '2023',
    points: {
      de: ['Nachhilfe für Abiturienten in Mathematik, Informatik und Englisch.'],
      en: ['Tutoring high school students preparing for their Abitur in mathematics, computer science and English.'],
    },
  },
];

export const education: CvEntry[] = [
  {
    title: { de: 'M.Sc. Praktische Informatik', en: 'M.Sc. Applied Computer Science' },
    org: 'HTW Saar',
    location: 'Saarbrücken',
    start: '2026-10',
  },
  {
    title: { de: 'B.Sc. Praktische Informatik', en: 'B.Sc. Applied Computer Science' },
    org: 'HTW Saar',
    location: 'Saarbrücken',
    start: '2023-10',
    end: '2026-10',
    points: {
      de: ['Abschlussnote 1,7', 'Wahlfächer in Software Development, Automatisierung, CI/CD und Microservices'],
      en: ['Final grade 1.7 (German scale)', 'Electives in software development, automation, CI/CD and microservices'],
    },
  },
  {
    title: { de: 'Abitur', en: 'Abitur (university entrance qualification)' },
    org: 'Gemeinschaftsschule Dudweiler',
    location: 'Saarbrücken-Dudweiler',
    start: '2019',
    end: '2022',
  },
];

export const skills: SkillGroup[] = [
  {
    label: { de: 'Schwerpunkte', en: 'Core stack' },
    items: ['TypeScript', 'PostgreSQL', 'Docker'],
  },
  {
    label: { de: 'Weitere Programmiersprachen', en: 'Other programming languages' },
    items: ['Java', 'JavaScript', 'Python', 'Go', 'Rust', 'Swift', 'C'],
  },
  { label: { de: 'Frameworks', en: 'Frameworks' }, items: ['NestJS', 'Vue.js', 'Spring', 'Playwright'] },
  {
    label: { de: 'Tools', en: 'Tools' },
    items: ['Linux', 'Shell-Scripting', 'GitHub Actions', 'Git', 'SQLite', 'LaTeX'],
  },
  {
    label: { de: 'Sprachen', en: 'Languages' },
    items: { de: ['Deutsch (Muttersprache)', 'Englisch (fließend)'], en: ['German (native)', 'English (fluent)'] },
  },
];
