import styles from "./heroSection.module.scss";
import ArrowNext from "@/app/assets/ArrowNext";
import ArrowBack from "@/app/assets/ArrowBack";
import DateLine from "./images/DateLine";
import Button from "../button/Button";

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.heroSlogan}>
          Project
          <span className={styles.sloganSpan}>Home</span>
        </h2>
        <div className={styles.arrowWrapper}>
          <div className={styles.arrowBack}>
            <ArrowBack />
          </div>
          <div className={styles.arrowNext}>
            <ArrowNext />
          </div>
        </div>
        <div className={styles.date}>
          <p>01</p>
          <DateLine />
          <p>02</p>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src="./heroImage.png" />
        <Button text="Взлянуть" color="#333333" background="#ffff" />
      </div>
    </section>
  );
};

export default HeroSection;
