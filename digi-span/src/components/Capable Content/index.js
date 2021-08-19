import css from "./Capable.module.css";
import { useHistory } from "react-router-dom";
import Button from "../Button";
import Paragraph from "../Paragraph";
import Subheading from "../Subheading";
import CapableOptions from "../CapableOptions";

function CapableContent() {
  const history = useHistory();
  const navigateTo = () => history.push("/about");

  return (
    <div>
      <div className={css.mainContainer}>
        <div className={css.capableContainer}>
          <Subheading partOne={"What are"} partTwo={"we capable of"} />
          <Paragraph
            text={
              "By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement."
            }
          />
          <Button onClick={navigateTo} text={"Our process"} />
        </div>
        <CapableOptions />
      </div>
    </div>
  );
}

export default CapableContent;
