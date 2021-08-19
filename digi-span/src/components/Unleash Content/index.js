import css from "./Unleash.module.css";
import { useHistory } from "react-router-dom";
import Button from "../Button";
import Paragraph from "../Paragraph";
import Subheading from "../Subheading";

function UnleashContent() {
  const history = useHistory();
  const navigateTo = () => history.push("/contact");

  return (
    <div>
      <div className={css.unleashContent}>
        <h2 className={css.title}>BRAND, DEV, ECOM, MARKETING</h2>
        <Subheading partOne={"We unleash"} partTwo={" business potential"} />
        <Paragraph
          text={
            "We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance."
          }
        />
        <Button onClick={navigateTo} text={"Let's talk"} />
      </div>
    </div>
  );
}

export default UnleashContent;
