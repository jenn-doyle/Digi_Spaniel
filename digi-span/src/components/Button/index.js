import css from "./Button.module.css";

function Button({ onClick, text }) {
  return (
    <button className={css.goToBtn} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
