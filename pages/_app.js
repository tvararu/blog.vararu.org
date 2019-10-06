import App from "next/app";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <h1>
          <a href="/">blog.vararu.org</a>
        </h1>
        <Component {...pageProps} />
      </>
    );
  }
}
