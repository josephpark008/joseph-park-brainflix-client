import "./CommentsSection.scss";
import avatar from "../../../assets/Images/Mohan-muruge.jpg";
import CommentsList from "../CommentsList/CommentsList";
import Buttons from "../../Buttons/Buttons";
import commentIcon from "../../../assets/Icons/add_comment.svg";
import { useState } from "react";
import '../../../styles/global.scss';

export default function CommentsSection(props) {
  const { videoData } = props;
  const { comments } = videoData;


  const [commentText, setCommentText] = useState("")
  const [commentError, setCommentError] = useState(false)


  const handleCommentValidation = () => {
    setCommentError(false)

    if (!commentText.trim()) {
      setCommentError(true)
    }
  };

  return (
    <div className="comment-section">
      <p className="comment-section__amount">3 Comments</p>

      <img
        className="comment-section__avatar"
        src={avatar}
        alt="avatar image"
      />
      <div className="comment-make">
        <p className="comment-make__header">JOIN THE CONVERSATION</p>
        <textarea
          className={`comment-make__input ${commentError ? 'input--error' : ''}`}
          placeholder="Add a new comment"
          onChange={(e) => {setCommentText(e.target.value)}}
          value={commentText}
        ></textarea>
        <Buttons
          handleClick={handleCommentValidation}
          ButtonClass="comment-button"
          ButtonText="COMMENT"
          ButtonIcon={commentIcon}
        />
      </div>
      <CommentsList commentList={comments} />
    </div>
  );
}
