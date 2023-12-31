import "./menu.css";
import iconMenu from "../../images/icon-menu.svg";
import iconClose from "../../images/icon-close.svg";

const Menu = (props) => {
  return (
    <div className="Menu slide-right">
      <div className="Menu-close">
        <img
          src={iconClose}
          alt="iconClose"
          onClick={() => props.setToggleMenu(!props.toggleMenu)}
        />
      </div>
      <p>
        <a href="#collections">Collections</a>
      </p>
      <p>
        <a href="#men">Men</a>
      </p>
      <p>
        <a href="#women">Women</a>
      </p>
      <p>
        <a href="#about">About</a>
      </p>
      <p>
        <a href="#contact">Contact</a>
      </p>
    </div>
  );
};

export default Menu;
