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
            color: #0b0c0c;
            font-family: Charter, Iowan, serif;
            margin: 1rem;
          }

          main {
            margin: 0 auto;
            max-width: 40rem;
          }

          a {
            color: #273c75;
            word-wrap: break-word;
          }

          a:visited {
            color: #192a56;
          }

          ul,
          ol {
            padding-left: 1.25rem;
          }

          pre {
            overflow: hidden;
            word-wrap: break-word;
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

          @media (prefers-color-scheme: dark) {
            body {
              background-color: #0b0c0c;
              color: #f3f2f1;
            }

            a {
              color: #5694ca;
            }

            a:visited {
              color: #1d70b8;
            }

            blockquote {
              border-color: #f3f2f1;
            }
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
