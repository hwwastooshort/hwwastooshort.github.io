// Personal details used across the site.
export const site = {
  name: 'Harvey Wirth',
  role: { de: 'Software Engineer und Masterstudent der Informatik', en: "Software Engineer and Computer Science master's student" },
  intro: {
    de: 'Ich arbeite als Software Engineer bei EUROKEY Software und studiere im Master Praktische Informatik an der HTW Saar. Beruflich arbeite ich vor allem mit TypeScript, PostgreSQL und Docker, im Studium liegt mein Fokus auf Software Engineering, KI und Automatisierung.',
    en: "I work as a software engineer at EUROKEY Software and am pursuing a master's degree in Applied Computer Science at HTW Saar. At work I mostly use TypeScript, PostgreSQL and Docker; at university I focus on software engineering, AI and automation.",
  },
  email: 'hawi00008@htwsaar.de',
  links: [
    { label: 'GitHub', href: 'https://github.com/hwwastooshort' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harvey-wirth-18b6a629b/' },
  ],
  // Put the file into public/ and set the filename, or null to hide the link
  cvPdf: null as string | null,
};
