import css from "./Logo.module.css";
import logo from "../../assets/spaniel-logo.png";

function Logo() {
  return (
    <div>
      <img src={logo} alt="spaniel-logo" className={css.logoContainer} />
    </div>
  );
}

export default Logo;
