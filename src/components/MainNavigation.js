import penImg from "../Images/feather-pen.png";
import styles from "../styles/navigation.module.css";

export default function MainNavigation() {
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
              <a className={styles.mainNavLink} href="/Swift-sign/">
                &#x25c0; Go Back
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
