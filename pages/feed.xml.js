const Feed = () => null;

const blogPostsRssXml = (blogPosts) => {
  let latestPostDate = "";
  let rssItemsXml = "";

  blogPosts.forEach((post) => {
    const postDate = Date.parse(post.createdAt);
    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = post.createdAt;
    }
    rssItemsXml += `
      <item>
        <title>${post.title}</title>
        <link>
          ${post.href}
        </link>

        <pubDate>${post.createdAt}</pubDate>
        <description>
        <![CDATA[${post.text}]]>
        </description>
    </item>`;
  });

  return {
    rssItemsXml,
    latestPostDate,
  };
};

const getRssXml = (blogPosts) => {
  const { rssItemsXml, latestPostDate } = blogPostsRssXml(blogPosts);

  return `<?xml version="1.0" ?>
  <rss version="2.0">
    <channel>
        <title>blog.vararu.org</title>
        <link>https://blog.vararu.org</link>
        <description>blog.vararu.org</description>
        <language>en</language>
        <lastBuildDate>${latestPostDate}</lastBuildDate>
        ${rssItemsXml}
    </channel>
  </rss>`;
};

Feed.getInitialProps = ({ res }) => {
  if (!res) return;

  const blogPosts = [
    {
      createdAt: "2020-06-07",
      title: "Foo",
      href: "https://blog.vararu.org/foo",
      text: "Lorem ipsum",
    },
  ];
  res.setHeader("Content-Type", "text/xml");
  res.write(getRssXml(blogPosts));
  res.end();
};

export default Feed;
