import css from "./CategoryTitle.module.css";

function CategoryTitle({ titleText }) {
  return (
    <h1 className={css.catTitle}>
      {titleText}
    </h1>
  );
}

export default CategoryTitle;
