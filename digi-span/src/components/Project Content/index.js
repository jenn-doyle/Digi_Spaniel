import css from "./Project.module.css";
import Subheading from "../Subheading";
import Tabs from "../ImageTab";
import Whellies from "../../assets/whellies01.png";
import Dashboard from "../../assets/dashboard01.png";
import Dinamo from "../../assets/newspaper.png";
import ProjectGallery from "../Project Gallery";
import NextBtn from "../Next Button";
import Button from "../Button";
import { useHistory } from "react-router-dom";

function ProjectContent() {
  const history = useHistory();
  const navigateTo = () => history.push("/work");

  return (
    <div>
      <div className={css.mainGallery}>
        <div className={css.projectContainer}>
          <Subheading partOne={"Some of our"} partTwo={"recent projects"} />
          <Tabs>
            <div label="All">
              <ProjectGallery />
            </div>
            <div label="Branding">
              <img src={Whellies} alt="wellies" />
            </div>
            <div label="Web Design">
              <img src={Dashboard} alt="dashboard" />
            </div>
            <div label="Digital Marketing">
              <img src={Dinamo} alt="newspaper" />
            </div>
          </Tabs>
        </div>
      </div>
      <div className={css.workBtn}>
        <Button onClick={navigateTo} text={"See all work"} />
        <div className={css.btnSq}>
          <NextBtn text={"<"} />
          <NextBtn text={">"} />
        </div>
      </div>
    </div>
  );
}

export default ProjectContent;
