import css from "./CategoryList.module.css";

function CategoryList({ list, icon, onClick }) {
  return (
    <ul>
      {list.map((item, index) => {
        return (
          <div key={index}>
            <button className={css.catBtn} onClick={onClick}>
              {item}
            </button>
            <span className={css.myIcon}>{icon}</span>
          </div>
        );
      })}
    </ul>
  );
}

export default CategoryList;
