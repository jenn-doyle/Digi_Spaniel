import css from "./NextBtn.module.css";

function NextBtn({ onClick, text }) {
  return (
    <button className={css.btnNext} onClick={onClick}>
      {text}
    </button>
  );
}

export default NextBtn;
