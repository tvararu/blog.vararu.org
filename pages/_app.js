import App from "next/app";
import Head from "next/head";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>blog.vararu.org</title>
        </Head>
        <style global jsx>{`
          body {
            font-family: Charter, Iowan, Palatino, "Times New Roman", Times,
              serif;
            margin: 1rem;
          }

          main {
            margin: 0 auto;
            max-width: 40rem;
          }

          a {
            color: #273c75;
          }

          a:visited {
            color: #192a56;
          }

          ul,
          ol {
            padding-left: 1.25rem;
          }

          pre {
            overflow-y: scroll;
            background: #2f3640;
            padding: 1rem;
            color: #ffffff;
            margin: 0 -1rem;
          }

          pre,
          code {
            font-family: Menlo, Monaco, Consolas, "Liberation Mono",
              "Courier New", monospace;
          }

          blockquote {
            margin-left: 0;
            padding: 1px 0rem 0.1rem 1rem;
            border-left: solid 0.5rem #2f3640;
          }

          footer {
            margin: 2rem 0;
          }
        `}</style>
        <main>
          <h1>
            <a href="/">blog.vararu.org</a>
          </h1>
          <Component {...pageProps} />
          <footer />
        </main>
      </>
    );
  }
}
