import css from "./Paragraph.module.css";

function Paragraph({ text }) {
  return <p className={css.mainText}>{text}</p>;
}

export default Paragraph;
