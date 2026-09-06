// Static fallback data for the software portfolio. Live description, language
// breakdown and last-push date are fetched from GitHub at runtime when the
// unauthenticated API rate limit allows; these values are what visitors see
// otherwise, so keep them accurate.
const OWNER = 'erik-t-irgens'

export const projects = [
  {
    name: 'dungeon-dynamics',
    description: 'A dungeon-crawler project. See the repository for details.',
    url: `https://github.com/${OWNER}/dungeon-dynamics`,
    languages: [],
  },
  {
    name: 'erik-irgens-website',
    description:
      'The code behind this site. A React portfolio built from scratch without a third-party UI framework: sections, buttons, carousels and the reveal animations are all hand-written.',
    url: `https://github.com/${OWNER}/erik-irgens-website`,
    languages: [['JavaScript', 1], ['CSS', 1], ['HTML', 1]],
  },
  {
    name: 'word-visualization',
    description:
      "Displays information about a user-provided term. The term is compared against the DataMuse repository, then its synonyms, antonyms, related words and rhymes are ranked and explored through interactive node graphs built with Sigma.js, React-vis and Semantic-UI. Grew out of data-visualization contract work at Wheelhouse DMG.",
    url: `https://github.com/${OWNER}/word-visualization`,
    languages: [['JavaScript', 1], ['CSS', 1], ['HTML', 1]],
  },
  {
    name: 'CIRCLES_MVC',
    description:
      'A collaborative mock social-media site built in one week with C#/.NET, ASP.NET Core with Identity, MVC, SQL and a companion API. Users authenticate, then create and modify "circles" of other users with shared interests to meet up and enjoy events together.',
    url: `https://github.com/${OWNER}/CIRCLES_MVC`,
    languages: [['C#', 1], ['HTML', 1], ['CSS', 1]],
  },
  {
    name: 'CIRCLES_API',
    description: 'The ASP.NET Core Web API that backs the Circles project.',
    url: `https://github.com/${OWNER}/CIRCLES_API`,
    languages: [['C#', 1]],
  },
]

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
