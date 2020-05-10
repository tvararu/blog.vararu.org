import Head from "next/head";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const Meta = ({ title, date, description }) => (
  <>
    <Head>
      {title && <title>{title} | blog.vararu.org</title>}
      {title && <meta name="title" content={title} />}
      {description && <meta name="description" content={description} />}
    </Head>
    {title && <h1>{title}</h1>}
    {title && <hr />}
    {date && <time dateTime={date}>{formatDate(date)}</time>}
  </>
);

export default Meta;
