// Software portfolio.
//
// `featured` entries get a large card with a typographic cover; give one an
// `image` (imported from src/assets) to show a screenshot instead, and a
// `liveUrl` to add a "visit" link. Bracketed text is a placeholder.
//
// `more` entries are compact cards. For every entry the live description,
// language breakdown and last-push date are fetched from GitHub at runtime
// when the unauthenticated API rate limit allows; the text here is what
// visitors see otherwise.
const OWNER = 'erik-t-irgens'
const repoUrl = (name) => `https://github.com/${OWNER}/${name}`

export const featured = [
  {
    name: 'interactive-book-project',
    title: 'Interactive book',
    kind: 'Website',
    tint: 'var(--amber)',
    glyph: 'Bk',
    description: '[placeholder: one or two sentences about the book site: what the book is, who it is for, and what the site lets a reader do.]',
    url: repoUrl('interactive-book-project'),
    liveUrl: null,
    languages: [],
  },
  {
    name: 'anamnesis-audio',
    title: 'Anamnesis audio',
    kind: 'Audio',
    tint: 'var(--teal)',
    glyph: 'An',
    description: '[placeholder: what this audio project is and why you made it.]',
    url: repoUrl('anamnesis-audio'),
    liveUrl: null,
    languages: [],
  },
  {
    name: 'erik-irgens-website',
    title: 'This site',
    kind: 'Website',
    tint: 'var(--blue)',
    glyph: 'ei',
    description:
      'The site you are reading. Rebuilt in 2026 on Vite and React with hand-written components and no UI framework; the first version dates from 2019.',
    url: repoUrl('erik-irgens-website'),
    liveUrl: 'https://erikirgens.com/',
    languages: [['JavaScript', 1], ['CSS', 1], ['HTML', 1]],
  },
]

export const more = [
  { name: 'word-game', description: 'A word game. Details load from GitHub.', url: repoUrl('word-game'), languages: [] },
  { name: 'sushi-night', description: 'Details load from GitHub.', url: repoUrl('sushi-night'), languages: [] },
  { name: 'metric-maker', description: 'Details load from GitHub.', url: repoUrl('metric-maker'), languages: [] },
  {
    name: 'word-visualization',
    description:
      'Explores a term through its synonyms, antonyms, related words and rhymes from DataMuse, ranked and drawn as interactive node graphs with Sigma.js and React-vis.',
    url: repoUrl('word-visualization'),
    languages: [['JavaScript', 1], ['CSS', 1], ['HTML', 1]],
  },
  { name: 'dungeon-dynamics', description: 'A dungeon-crawler project. Details load from GitHub.', url: repoUrl('dungeon-dynamics'), languages: [] },
  {
    name: 'CIRCLES_MVC',
    description:
      'A mock social network built in a week with ASP.NET Core, Identity, MVC and SQL: users create "circles" of people with shared interests.',
    url: repoUrl('CIRCLES_MVC'),
    languages: [['C#', 1], ['HTML', 1], ['CSS', 1]],
  },
]

export const githubProfile = `https://github.com/${OWNER}`

export const languageColors = {
  JavaScript: '#ffb619',
  TypeScript: '#80ffa2',
  'C#': '#42f5d1',
  CSS: '#7081ff',
  HTML: '#7243d1',
  SCSS: '#c96fd6',
  Shell: '#9ad35b',
  Python: '#3d8bd9',
}
const spare = ['#d98c3d', '#8fd1a5', '#c0c0c0', '#e07ea3']
export function languageColor(name, i) {
  return languageColors[name] || spare[i % spare.length]
}
