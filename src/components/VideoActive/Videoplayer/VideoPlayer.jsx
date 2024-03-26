import "./VideoPlayer.scss";

export default function VideoPlayer({ image }) {
  return (
    <div className="video-active">
      <video controls className="video-active__poster" poster={image}></video>
      
    </div>
  );
}
