import css from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className={css.footer}>
      <p className={css.footerDetails}>
        Copyright © Digital Spaniel 2019. All rights reserved.
      </p>
      <span className={css.mediaIcons}>
        <FaFacebookF className={css.theIcon} />
        <FaTwitter className={css.theIcon} />
        <FaInstagram className={css.theIcon} />
        <FaLinkedinIn className={css.theIcon} />
      </span>
    </div>
  );
}

export default Footer;
