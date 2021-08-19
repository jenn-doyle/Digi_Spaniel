import css from "./Gallery.module.css";
import Whellies from "../../assets/whellies01.png";
import Newspaper from "../../assets/newspaper02.png";
//import Dinamo from "../../assets/newspaper.png";
import Mackerel from "../../assets/makerek.png";
import Rider from "../../assets/rider01.png";

function ProjectGallery() {
  return (
    <div className={css.galleryImg}>
      <img src={Whellies} alt="whellies" />
      <img src={Newspaper} alt="newspaper" />
      <img src={Mackerel} alt="mackerel" />
      <img src={Rider} alt="rider" />
    </div>
  );
}

export default ProjectGallery;
