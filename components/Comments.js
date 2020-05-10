import Time from "./Time";
import fetch from "node-fetch";

export const fetchComments = (issueId) => async () => {
  const res = await fetch(
    `https://api.github.com/repos/tvararu/blog.vararu.org/issues/${issueId}/comments`
  );
  const data = await res.json();
  const props = Array.isArray(data) ? { comments: data } : {};

  return { props };
};

const CommentList = ({ comments }) => (
  <>
    {comments.map((comment) => (
      <div key={comment.id}>
        <h4>
          {comment.user.login} on <Time iso={comment.created_at} />:
        </h4>
        <blockquote>
          <pre>{comment.body}</pre>
        </blockquote>
      </div>
    ))}
  </>
);

const Fallback = ({ title }) => (
  <p>
    To leave a comment,{" "}
    <a
      href={`https://github.com/tvararu/blog.vararu.org/issues/new?title=Comments: ${title}&body=Leave a comment on this issue to comment on the blog post%2E`}
    >
      open an issue
    </a>{" "}
    and then comment on the issue.
  </p>
);

const LeaveAComment = ({ issueId }) => (
  <p>
    <a href={`https://github.com/tvararu/blog.vararu.org/issues/${issueId}`}>
      Leave a comment via GitHub
    </a>
    .
  </p>
);

const Comments = ({ issueId, title, comments }) => (
  <>
    <hr />
    <h3>Comments{comments && ` (${comments.length})`}</h3>
    {issueId ? (
      <>
        <LeaveAComment issueId={issueId} />
        {comments && <CommentList comments={comments} />}
      </>
    ) : (
      <Fallback title={title} />
    )}
  </>
);

export default Comments;
