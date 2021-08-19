import css from "./App.module.css";
import NavBar from "../NavBar";
import spanielBg from "../../assets/spaniel-img.png";
import UnleashContent from "../Unleash Content";
import CapableContent from "../Capable Content";
import Footer from "../Footer";
import ProjectContent from "../Project Content";
import ExploreContent from "../Explore Content";
import Logo from "../Logo";
import HamMenu from "../HamMenu";

function App() {
  return (
    <div className={css.wrapper}>
      <div className={css.appContent}>
        <Logo />
        <NavBar />
        <HamMenu />
        <div className={css.blueContainer}>
          <img src={spanielBg} className={css.blueSpaniel} alt="spaniel-dog" />
        </div>
        <UnleashContent />
      </div>
      <CapableContent />
      <ProjectContent />
      <ExploreContent />
      <Footer />
    </div>
  );
}

export default App;
