import ViewsIcon from "../../../assets/Icons/views.svg";
import LikesIcon from "../../../assets/Icons/likes.svg";
import "./VideoInfo.scss";
import '../../../styles/global.scss';

export default function VideoInfo(props) {
  const { videoData } = props;
  const { title, channel, timestamp, description, views, likes } = videoData;

  //Convert timestamp to date
  const today = new Date(timestamp);
  const d = today.getDate();
  const m = today.getMonth() + 1;
  const y = today.getFullYear();
  const date = `${m}/${d}/${y}`;

  return (
    <div className="video-info">
      <h1 className="video-info__header">{title}</h1>
      <div className="video-details">
        <div className="posted-details">
          <p className="posted-details__creator">By {channel}</p>
          <p className="posted-details__date">{date}</p>
        </div>
        <div className="video-numbers">
          <div className="view-details">
            <img
              className="view-details__icon"
              src={ViewsIcon}
              alt="views icon"
            />
            <p className="view-details__count">{views}</p>
          </div>

          <div className="likes-details">
            <img
              className="likes-details__icon"
              src={LikesIcon}
              alt="likes icon"
            />
            <p className="likes-details__count">{likes}</p>
          </div>
        </div>
      </div>

      <p className="video-info__descript">{description}</p>
    </div>
  );
}
