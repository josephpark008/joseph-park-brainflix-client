import { Link } from "react-router-dom";
import "./Video.scss";
import '../../../styles/global.scss';

export default function Video(props) {
  const { videoData } = props;

  return (
    <Link to={`/videos/${videoData.id}`} className="video">
      <img
        className="video__image"
        src={videoData.image}
        alt="thumbnail image"
      />

      <div className="video-text">
        <h1 className="video-text__title">{videoData.title}</h1>
        <p className="video-text__creator">{videoData.channel}</p>
      </div>
    </Link>
  );
}
