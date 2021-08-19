import css from "./ExploreOptions.module.css";
import CategoryTitle from "../Cat Title";
import CategoryList from "../Cat List";
import { FaChevronCircleRight } from "react-icons/fa";

function ExploreOptions() {
  const exploreList = ["Services", "Work", "About", "Blog", "Careers"];
  const servicesList = ["Brand", "Development", "Marketing"];

  return (
    <div className={css.expContainer}>
      <div className={css.exploreFirst}>
        <CategoryTitle titleText={"Explore"} />
        <CategoryList
          list={exploreList}
          icon={<FaChevronCircleRight className={css.theIcon} />}
        />
      </div>
      <div className={css.exploreFirst}>
        <CategoryTitle titleText={"Services"} />
        <CategoryList
          list={servicesList}
          icon={<FaChevronCircleRight className={css.theIcon} />}
        />
      </div>
      <div>
        <CategoryTitle titleText={"Questions?"} />
        <div className={css.contactInfo}>
          <h5>Call Us</h5>
          <p>0121 345 678</p>
          <br />
          <h5>Email Us</h5>
          <p>info@digitalspaniel.co.uk</p>
        </div>
      </div>
    </div>
  );
}

export default ExploreOptions;
