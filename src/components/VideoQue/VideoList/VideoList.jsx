import Video from "../Video/Video";
import "./VideoList.scss";
import '../../../styles/global.scss';

export default function VideoList({ videos }) {
  return (
    <div className="video-list">
      <p className="video-list__header">NEXT VIDEOS</p>
      {videos.map((video) => {
        return (
          <Video key={video.id} videoData={video}  />
        );
      })}
    </div>
  );
}
