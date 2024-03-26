import UploadImage from "../../assets/Images/Upload-video-preview.jpg";
import Buttons from "../Buttons/Buttons";
import PublishIcon from "../../assets/Icons/publish.svg";
import "./Upload.scss";
import "../../styles/global.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:9090";

export default function Upload() {
  const navigate = useNavigate();
  //Title input validation
  const [titleText, setTitleText] = useState("");
  const [titleError, setTitleError] = useState(false);

  // //Description input validation
  const [descriptText, setDescriptText] = useState("");
  const [descriptError, setDescriptError] = useState(false);

  function uploadSubmit() {
    setTitleError(false);
    setDescriptError(false);
    if (!titleText.trim()) {
      setTitleError(true);
    }
    if (!descriptText.trim()) {
      setDescriptError(true);
    }
    if (titleText.trim() && descriptText.trim()) {
      uploadVideo({
        title: titleText,
        description: descriptText,
        image:
          "https://unit-3-project-api-0a5620414506.herokuapp.com/images/image8.jpg",
      });
    }
  }

  async function uploadVideo(data) {
    try {
      const result = await axios.post(`${baseUrl}/videos`, data);
      alert("video uploaded");
      navigate("/");
    } catch (error) {
      alert("video failed to upload");
    }
  }

  return (
    <div className="upload-section">
      <h1 className="upload-header">Upload Video</h1>

      <div className="video-thumbnail">
        <p className="video-thumbnail__label">VIDEO THUMBNAIL</p>
        <img
          className="video-thumbnail__thumbnail"
          src={UploadImage}
          alt="Upload Image"
        />
      </div>

      <form className="input-section">
        <div className="video-title">
          <p className="video-title__label">TITLE YOUR VIDEO</p>
          <input
            className={`video-title__input ${titleError ? "input--error" : ""}`}
            type="text"
            placeholder="Add a title to your video"
            onChange={(e) => {
              setTitleText(e.target.value);
            }}
          />
        </div>

        <div className="video-descript">
          <p className="video-descript__label">ADD A VIDEO DESCRIPTION</p>
          <input
            className={`video-descript__input ${
              descriptError ? "input--error" : ""
            }`}
            type="textarea"
            placeholder="Add a description to your video"
            onChange={(e) => {
              setDescriptText(e.target.value);
            }}
          />
        </div>
      </form>
      <div className="buttons-container">
        <div className="buttons">
          <Buttons
            handleClick={uploadSubmit}
            ButtonText="PUBLISH"
            ButtonIcon={PublishIcon}
            ButtonClass="upload-button"
          />
          <button className="cancel-button">CANCEL</button>
        </div>
      </div>
    </div>
  );
}
