import designs from "../styles/general.module.css";
import styles from "../styles/hero.module.css";
import signImg from "../Images/sign.png";
import sign2 from "../Images/sign2.png";
import contractImg from "../Images/contract.png";

export default function HeroSection() {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.hero}>
        <div className={styles.heroTextBox}>
          <div className={styles.document}>
            <img
              src={contractImg}
              className={styles.contractImg}
              alt="Contract Icon"
            />
            <h1 className={designs.headingPrimary}>
              Ultimate Digital Sign Generator{" "}
            </h1>
          </div>
          <p className={styles.heroDescription}>
            Craft a captivating signature effortlessly, tailor it with dynamic
            fonts, vibrant colors, and effortlessly download your unique
            creation. Make your mark with unmatched style and flair.
          </p>
          <a
            href="/Swift-sign/generate"
            className={`${designs.btn} ${designs.btnFull} ${designs.marginRgt}`}>
            Try now
          </a>

          <a href="#how" className={`${designs.btn} ${designs.btnOutline}`}>
            Learn more &darr;
          </a>
        </div>
        <div className={styles.heroImageBox}>
          <picture className={styles.itemTop}>
            <img
              src={signImg}
              className={styles.heroImg}
              alt="Document with signature"
            />
          </picture>
          <picture className={styles.itemBottom}>
            <img
              src={sign2}
              className={styles.hero2Img}
              alt="Contract signature"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
