import penImg from "../Images/feather-pen.png";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  return (
    <>
      <header className={styles.header}>
        {/* logo */}
        <div className={styles.mainLogo}>
          <img src={penImg} alt="fountain-pen-icon" />
          <h1>SwiftSign</h1>
        </div>

        {/* navigation */}
        <nav className={styles.mainNav}>
          <ul className={styles.mainNavList}>
            <li>
              <a className={styles.mainNavLink} href="#how">
                How it works
              </a>
            </li>
            <li>
              <a className={styles.mainNavLink} href="#inspirations">
                Inspirations
              </a>
            </li>
            <li>
              <a className={`${styles.mainNavLink} ${styles.navBtn}`} href="/Swift-sign/generate">
                Try for free
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
