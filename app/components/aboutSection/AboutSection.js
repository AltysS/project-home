import Button from "../button/Button";
import styles from "./aboutSection.module.scss";

const imagesPath = ["./about0.png", "./about1.png", "./about2.png"];

const AboutSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        {imagesPath.map((el, index) => (
          <div key={index} className={styles.image}>
            <img src={el} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      <div className={styles.aboutUsWrapper}>
        <h2>О компании</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Button text="Читать" color="#333333" background="#ffff" />
      </div>
    </section>
  );
};

export default AboutSection;
