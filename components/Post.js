import Link from "next/link";

const Post = ({ date, title, href }) => (
  <p>
    <style jsx>{`
      p {
        display: flex;
        justify-content: space-between;
      }

      time {
        margin-left: 0.5rem;
      }
    `}</style>
    <Link href={href}>
      <a>{title}</a>
    </Link>
    <time dateTime={date}>
      {`${date.slice(0, 4)}/${date.slice(5)}`}
    </time>
  </p>
);

export default Post;
