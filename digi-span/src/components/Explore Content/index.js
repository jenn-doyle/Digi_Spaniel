import css from "./Explore.module.css";
import { useHistory } from "react-router-dom";
import Button from "../Button";
import Subheading from "../Subheading";
import ExploreOptions from "../ExploreOptions";

function ExploreContent() {
  const history = useHistory();
  const navigateTo = () => history.push("/contact");

  return (
    <div >
      <div className={css.exploreContainer}>
        <div className={css.exploreContent}>
          <Subheading partOne={"We're a brands"} partTwo={"best friend"} />
          <div className={css.expBtn}>
            <Button onClick={navigateTo} text={"Let's talk"} />
          </div>
        </div>
        <ExploreOptions />
      </div>
    </div>
  );
}

export default ExploreContent;
