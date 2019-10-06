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
        <h1>
          <a href="/">blog.vararu.org</a>
        </h1>
        <Component {...pageProps} />
      </>
    );
  }
}
