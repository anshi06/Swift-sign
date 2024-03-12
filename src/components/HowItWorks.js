import styles from "../styles/how.module.css";
import designs from "../styles/general.module.css";
import next from "../Images/next.png";
import signature from "../Images/pen.png";
import colorPallete from "../Images/color-palette.png";
import download from "../Images/downloads.png";

export default function HowItWorks() {
  return (
    <>
      <section className={styles.how} id="how">
        <div className={styles.container}>
          <span className={`${designs.subheading} ${styles.heading}`}>
            How it works
          </span>
          <h2 className={designs.headingSecondary}>It's easy as 1, 2, 3</h2>
        </div>
        <div className={styles.steps}>
          <div className={`${styles.step}`}>
            <div className={styles.stepTextBox}>
              <div className={styles.stepHeading}>
                <img
                  src={signature}
                  alt="draw signature"
                  className={styles.iconLog}
                />
                <h3 className={designs.headingTertiary}>Draw your essence</h3>
              </div>
              <p className={styles.stepDescription}>
                Effortlessly sketch your signature with precision,ensuring
                personalized touch that reflects your identity.
              </p>
            </div>

            <div className={styles.stepImgBox}>
              <img src={next} className={styles.stepImg} alt="arrow next" />
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepTextBox}>
              <div className={styles.stepHeading}>
                <img
                  src={colorPallete}
                  alt="draw colors"
                  className={styles.iconLog}
                />
                <h3 className={designs.headingTertiary}>Style mastery</h3>
              </div>
              <p className={styles.stepDescription}>
                Dive into a realm of customization with fonts and colors,
                creating a signature that stands out.
              </p>
            </div>

            <div className={styles.stepImgBox}>
              <img src={next} className={styles.stepImg} alt="arrow next" />
            </div>
          </div>
          <div className={`${styles.step} ${styles.lastStep}`}>
            <div className={styles.stepTextBox}>
              <div className={styles.stepHeading}>
                <img
                  src={download}
                  alt="download file"
                  className={styles.iconLog}
                />
                <h3 className={designs.headingTertiary}>Download</h3>
              </div>
              <p className={styles.stepDescription}>
                With a click, transform your masterpiece into a downloadable
                file. Own your signature in png format.
              </p>
            </div>

            <div className={styles.stepImgBox} style={{ opacity: 0 }}>
              <img src={next} className={styles.stepImg} alt="arrow next" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
