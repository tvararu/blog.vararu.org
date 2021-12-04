import Link from "next/link";

const Post = ({ date, title, href }) => (
  <p>
    <time dateTime={date}>
      {`${date.slice(2, 4)}/${date.slice(5)}`}
    </time>{" "}
    <Link href={href}>
      <a>{title}</a>
    </Link>
  </p>
);

export default Post;
