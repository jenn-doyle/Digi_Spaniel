import CategoryTitle from "../Cat Title";
import CategoryList from "../Cat List";
import css from "./CapableOptions.module.css";
import { FaChevronCircleRight } from "react-icons/fa";

function CapableOptions() {
  const brandList = ["Brand Strategy", "Logo & Name", "Identity & Collateral"];
  const developList = ["eCommerce", "Web Development", "Mobile Apps"];
  const marketList = ["Digital", "Market Research"];

  return (
      <div className={css.sideContain}>
        <div>
        <CategoryTitle titleText={"brand"} />
        <CategoryList
          list={brandList}
          icon={<FaChevronCircleRight className={css.theIcon} />}
        />
        <br />
        <CategoryTitle titleText={"development"} />
        <CategoryList
          list={developList}
          icon={<FaChevronCircleRight className={css.theIcon} />}
        />
      </div>
      <div className={css.marketContent}>
        <CategoryTitle titleText={"marketing"} />
        <CategoryList
          list={marketList}
          icon={<FaChevronCircleRight className={css.theIcon} />}
        />
      </div>
      </div>
  );
}

export default CapableOptions;
