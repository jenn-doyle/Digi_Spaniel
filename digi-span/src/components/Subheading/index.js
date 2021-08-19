import css from "./Subheading.module.css";

function Subheading({ partOne, partTwo }) {
  return (
    <h1 className={css.subHead}>
      <span>{partOne}</span> <br />
      {partTwo}
    </h1>
  );
}

export default Subheading;
