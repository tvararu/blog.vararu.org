const Post = ({ date, title, href }) => (
  <p>
    <time dateTime={date}>
      {date.slice(5)}/{date.slice(2, 4)}
    </time>{" "}
    <a href={href}>{title}</a>
  </p>
);

export default Post;
