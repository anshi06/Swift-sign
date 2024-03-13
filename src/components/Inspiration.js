import steveJobsImg from "../Images/stevejobs.png";
import steveJobsSign from "../Images/steveSign.png";
import billGatesImg from "../Images/billGates.png";
import billGatesSign from "../Images/billGatesSign.png";
import obamaImg from "../Images/obama.png";
import obamaSign from "../Images/barack-obama-signature.png";
import styles from "../styles/inpirations.module.css";
import designs from "../styles/general.module.css";

export default function Inspiration() {
  return (
    <>
      <section className={styles.inspirations} id="inspirations">
        <div className={styles.container}>
          <span className={`${designs.subheading} ${styles.heading}`}>
            Inspirations
          </span>
          <h2 className={designs.headingSecondary}>Famous Signatures</h2>
        </div>

        <div className={styles.inspirationGrid}>
          <div className={styles.person}>
            <img
              src={steveJobsImg}
              alt="SteveJobs-img"
              className={styles.image}
            />
            <img
              src={steveJobsSign}
              alt="SteveJobs-sign"
              className={styles.sign}
            />
          </div>

          <div className={styles.person}>
            <img
              src={billGatesImg}
              alt="billGates-img"
              className={styles.image}
            />
            <img
              src={billGatesSign}
              alt="billGates-sign"
              className={styles.sign}
            />
          </div>

          <div className={styles.person}>
            <img src={obamaImg} alt="obama-img" className={styles.image} />
            <img src={obamaSign} alt="obama-sign" className={styles.sign} />
          </div>
        </div>
      </section>
    </>
  );
}
