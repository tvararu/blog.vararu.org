import Link from "next/link";

const Post = ({ date, title, href }) => (
  <p>
    <time dateTime={date}>
      {date.slice(5)}/{date.slice(2, 4)}
    </time>{" "}
    <Link href={href} prefetch={false}>
      <a>{title}</a>
    </Link>
  </p>
);

export default Post;
