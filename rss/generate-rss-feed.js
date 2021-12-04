const fs = require('fs').promises;

const generateRssFeed = async (posts) => {
  const items = posts.map(({ date, title, href }) => {
    return `
<item>
  <title>${title}</title>
  <link>https://blog.vararu.org${href}</link>
  <pubDate>${date}</pubDate>
</item>
`;
  });

  const template = await fs.readFile('rss/template.xml', 'utf8');
  const [before, after] = template.split('<!-- Posts -->');

  const feed = before + items.join('') + after;

  fs.writeFile('public/rss.xml', feed);
};

export default generateRssFeed;
