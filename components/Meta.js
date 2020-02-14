import Head from "next/head";

const formatDate = iso =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

const Meta = ({ title, date }) => (
  <>
    <Head>
      <title>{title} | blog.vararu.org</title>
    </Head>
    <h2>{title}</h2>
    <time dateTime={date}>{formatDate(date)}</time>
  </>
);

export default Meta;
