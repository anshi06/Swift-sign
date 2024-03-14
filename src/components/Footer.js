import styles from "../styles/footer.module.css";
import Insta from "../Images/instagram.png";
import twitter from "../Images/twitter.png";
import linkedIn from "../Images/linkedin.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoCol}>
        <ul className={styles.socialLinks}>
          <li>
            <a className={styles.footerLink} href="/">
              <img
                src={Insta}
                className={styles.socialIcon}
                alt="logo-instagram"
              />
            </a>
          </li>
          <li>
            <a className={styles.footerLink} href="/">
              <img
                src={linkedIn}
                className={styles.socialIcon}
                alt="logo-linkedIn"
              />
            </a>
          </li>
          <li>
            <a className={styles.footerLink} href="/">
              <img
                src={twitter}
                className={styles.socialIcon}
                alt="logo-twitter"
              />
            </a>
          </li>
        </ul>

        <ul className={styles.footerNav}>
          <li>
            <a className={styles.footerLink} href="/">
              Terms of use
            </a>
          </li>
          <li>
            <a className={styles.footerLink} href="/">
              Privacy Policy
            </a>
          </li>
        </ul>

        <p className={styles.copyright}>
          Copyright &copy; <span class="year">2027</span> by SwiftSign, Inc. All
          rights reserved.
        </p>
      </div>

      {/* <a href="#" className={styles.footerLogo}>
        <img
          src={penImg}
          alt="fountain-pen-icon"
          className={styles.footerLogoImg}
        />
        <h1>SwiftSign</h1>
      </a> */}
    </footer>
  );
}
