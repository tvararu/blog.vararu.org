import Head from "next/head";
import Time from "./Time";

const Meta = ({ title, date, description }) => (
  <>
    <Head>
      {title && <title>{title} | blog.vararu.org</title>}
      {title && <meta name="title" content={title} />}
      {description && <meta name="description" content={description} />}
    </Head>
    {title && <h1>{title}</h1>}
    {title && <hr />}
    {date && <Time iso={date} />}
  </>
);

export default Meta;
