import css from "./HamMenu.module.css";

function HamMenu() {
  return (
    <div className={css.menuWrap}>
      <input type="checkbox" className={css.toggler} />
      <div className={css.hamburger}>
        <div></div>
      </div>
      <div className={css.menu}>
        <div>
          <div>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HamMenu;
