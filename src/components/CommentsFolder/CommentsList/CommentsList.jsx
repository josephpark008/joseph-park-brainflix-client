import Comments from "../Comments/Comments";

export default function CommentsList(props) {
  const {commentList} = props;

  return (
    <div className="comment-list">
      {commentList.map((comment, index) => {
        return (
          <Comments
            className={index === commentList.length - 1 ? "last-comment" : "comment"}
            key={comment.id}
            commentData={comment}
          />
        );
      })}
    </div>
  );
}
