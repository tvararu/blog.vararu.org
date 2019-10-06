import Document, { Html, Head, Main, NextScript } from "next/document";

class NonSpaHead extends Head {
  render() {
    return (
      <head {...this.props}>
        {this.context._documentProps.head}
        {this.getCssLinks()}
        {this.context._documentProps.styles || null}
        {this.props.children}
      </head>
    );
  }
}

const Favicons = () => (
  <>
    <link
      rel="apple-touch-icon-precomposed"
      sizes="57x57"
      href="/static/favicon/apple-touch-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="114x114"
      href="/static/favicon/apple-touch-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="72x72"
      href="/static/favicon/apple-touch-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="144x144"
      href="/static/favicon/apple-touch-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="60x60"
      href="/static/favicon/apple-touch-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="120x120"
      href="/static/favicon/apple-touch-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="76x76"
      href="/static/favicon/apple-touch-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="152x152"
      href="/static/favicon/apple-touch-icon-152x152.png"
    />
    <link
      rel="icon"
      type="image/png"
      href="/static/favicon/favicon-196x196.png"
      sizes="196x196"
    />
    <link
      rel="icon"
      type="image/png"
      href="/static/favicon/favicon-96x96.png"
      sizes="96x96"
    />
    <link
      rel="icon"
      type="image/png"
      href="/static/favicon/favicon-32x32.png"
      sizes="32x32"
    />
    <link
      rel="icon"
      type="image/png"
      href="/static/favicon/favicon-16x16.png"
      sizes="16x16"
    />
    <link
      rel="icon"
      type="image/png"
      href="/static/favicon/favicon-128.png"
      sizes="128x128"
    />
    <meta name="application-name" content="vararu.org" />
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta
      name="msapplication-TileImage"
      content="/static/favicon/mstile-144x144.png"
    />
    <meta
      name="msapplication-square70x70logo"
      content="/static/favicon/mstile-70x70.png"
    />
    <meta
      name="msapplication-square150x150logo"
      content="/static/favicon/mstile-150x150.png"
    />
    <meta
      name="msapplication-wide310x150logo"
      content="/static/favicon/mstile-310x150.png"
    />
    <meta
      name="msapplication-square310x310logo"
      content="/static/favicon/mstile-310x310.png"
    />
  </>
);

const CustomHead = () => (
  <NonSpaHead>
    <meta name="description" content="Theodor Vararu's blog." />

    <link rel="canonical" href="https://blog.vararu.org/" />

    <meta property="og:site_name" content="blog.vararu.org" />
    <meta property="og:title" content="blog.vararu.org" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://blog.vararu.org" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="blog.vararu.org" />
    <meta name="twitter:url" content="https://blog.vararu.org/" />

    <Favicons />
  </NonSpaHead>
);

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <CustomHead />
        <body>
          <Main />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
