import App from "next/app";
import Head from "next/head";
import Link from "next/link";

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
            margin: 1rem;
          }

          main {
            margin: 0 auto;
            max-width: 40rem;
          }

          a,
          pre {
            word-wrap: break-word;
          }

          h1 {
            font-size: 1.17em;
            margin-bottom: 0;
          }

          pre {
            background: #f3f2f1;
            padding: 1rem;
            margin: 0 -1rem;
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
              color: #f499be;
            }

            pre {
              background: #000;
            }
          }
        `}</style>
        <style jsx>{`
          .title,
          .title:visited {
            color: #0b0c0c;
          }

          @media (prefers-color-scheme: dark) {
            .title,
            .title:visited {
              color: #f3f2f1;
            }
          }
        `}</style>
        <main>
          <header>
            <Link href="/">
              <a className="title">blog.vararu.org</a>
            </Link>
          </header>
          <Component {...pageProps} />
          <footer>
            <hr />
            <p>
              Written by <a href="https://vararu.org">Theodor Vararu</a>.{" "}
              <a href="https://github.com/tvararu/blog.vararu.org">
                Source code on GitHub
              </a>
              .
            </p>
          </footer>
        </main>
      </>
    );
  }
}
