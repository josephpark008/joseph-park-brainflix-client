import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import './NavHeader.scss';
import Buttons from "../Buttons/Buttons";
import uploadIcon from '../../assets/Icons/upload.svg';
import searchIcon from '../../assets/Icons/search.svg';
import { Link } from "react-router-dom";
import '../../styles/global.scss';

export default function NavHeader() {
  return (
    <>
      <div className="nav">
        <Link className="nav__logo" to='/'><img src={logo} alt="Brainflix logo" /></Link>
        <input style={{ backgroundImage: `url(${searchIcon})` }} className="nav__search" type="text" placeholder="Search" />
        <img className="nav__avatar" src={avatar} alt="avatar image" />
        <Link to='/upload' className="nav__upload-button"><Buttons ButtonText='UPLOAD' ButtonIcon={uploadIcon}></Buttons></Link>
        
      </div>
    </>
  );
}


// < className="nav__upload-button">
