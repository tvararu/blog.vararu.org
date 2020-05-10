import useSWR from "swr";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  return res.json();
};

const FallbackNoData = () => (
  <p>
    You can{" "}
    <a href="https://github.com/tvararu/blog.vararu.org/issues">
      read and leave comments on GitHub
    </a>
    .
  </p>
);

const FallbackNoIssue = ({ title }) => (
  <p>
    To leave a comment,{" "}
    <a
      href={`https://github.com/tvararu/blog.vararu.org/issues/new?title=Comments: ${title}`}
    >
      open an issue
    </a>{" "}
    with the title "<code>Comments: {title}</code>" and an empty description,
    and then comment on the issue.
  </p>
);

const api = (url) =>
  "https://api.github.com/repos/tvararu/blog.vararu.org" + url;

const CommentList = ({ issues, title }) => {
  const issue = issues.find((issue) => issue.title === `Comments: ${title}`);

  return issue ? <p>foo</p> : <FallbackNoIssue title={title} />;
};

const Comments = ({ title }) => {
  const { data: issues, error } = useSWR(api("/issues"), fetcher);
  const issuesLoaded = issues && !error;

  return (
    <>
      <hr />
      <h3>Comments</h3>

      {issuesLoaded ? (
        <CommentList issues={issues} title={title} />
      ) : (
        <FallbackNoData />
      )}
    </>
  );
};

export default Comments;
