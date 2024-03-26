import "./Buttons.scss";

export default function Buttons({ButtonText, ButtonIcon, ButtonWidth, handleClick}) {
  return (
      <button onClick={handleClick} className={`action-button action-button--${ButtonText}`} style={{ backgroundImage: `url(${ButtonIcon})` }}>{ButtonText}</button>
  );
}

