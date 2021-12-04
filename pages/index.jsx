
import Meta from "components/Meta";
import Post from "components/Post";
import generateRssFeed from "rss/generate-rss-feed";
export const config = {
  unstable_runtimeJS: false,
};

const posts = [
  { date: "2021-11", title: "How I organise and import new music", href: "/new-music" },
  { date: "2020-06", title: "First impressions with Blitz.js", href: "/blitz" },
  { date: "2020-05", title: "Stop building client-side forms", href: "/stop-building-client-side-forms" },
  { date: "2020-04", title: "Fieldnotes for running Proxmox with Windows and macOS guests", href: "/proxmox" },
  { date: "2019-10", title: "Building my new blog", href: "/new-blog" },
  { date: "2019-01", title: "What to do with software development downtime", href: "/downtime" },
  { date: "2017-06", title: "Creating a Ghost in the Shell screensaver for macOS", href: "/ghost-in-the-screensaver" },
  { date: "2017-06", title: "Accessibility testing tools are lying to you", href: "/lying-a11y-tools" },
  { date: "2017-03", title: "What's WebVR good for?", href: "/why-webvr" },
  { date: "2016-11", title: "A yak shaver's guide to upgrading Ghost from 0.5.9 to 0.11.3", href: "/yak-shaving-ghost" },
  { date: "2016-11", title: "A computer you'll fall in love with", href: "/computer" },
  { date: "2016-10", title: "When to rewrite code from scratch", href: "/rewrite-from-scratch" },
  { date: "2015-12", title: "Operational reasoning considered harmful", href: "/operational-reasoning" },
  { date: "2015-02", title: "let javascript :  haskell?", href: "/let-javascript-haskell" },
  { date: "2015-01", title: "Deploying an app with Facebook Login in 5 minutes", href: "/meteor-sso" },
  { date: "2014-10", title: "Dotfiles!", href: "/dotfiles" },
  { date: "2014-10", title: "WebGL cloth implemented in Famo.us", href: "/famous-cloth" },
  { date: "2014-10", title: "Humble asm.js Bundle", href: "/humble-asm" },
  { date: "2014-10", title: "GitHub Student Developer Pack", href: "/github-pack" },
  { date: "2014-08", title: "Adding HTML5 pushstate support to mean-seo", href: "/mean-seo" }
];

export const getStaticProps = async () => {
  generateRssFeed(posts);
  return { props: {} };
};

const Index = () => <>
  <Meta description="Theodor Vararu's blog." />

  { posts.map(post => <Post {...post} />) }
</>;

export default Index;
