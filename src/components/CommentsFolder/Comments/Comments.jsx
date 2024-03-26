import "./Comments.scss";
import '../../../styles/global.scss';

export default function ({ commentData, className }) {
  const { name, timestamp, comment } = commentData;
  //Convert timestamp into proper date format
  const today = new Date(timestamp);
  const d = today.getDate();
  const m = today.getMonth() + 1;
  const y = today.getFullYear();
  const date = `${m}/${d}/${y}`;

  return (
    <div className={className}>
      <div className="comments__blank-avatar"></div>
      <div className="comments-info">
        <div className="comments-details">
          <p className="comments-details__name">{name}</p>
          <p className="comments-details__date">{date}</p>
        </div>
        <p className="comments-info__text">{comment}</p>
      </div>
    </div>
  );
}
