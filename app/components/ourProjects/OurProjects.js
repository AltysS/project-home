import Button from "../button/Button";
import styles from "./ourProjects.module.scss";

const projects = [
  { src: "./project1.png", text: "ДОСУГОВЫЙ ЦЕНТР" },
  { src: "./project2.png", text: "ДОСУГОВЫЙ ЦЕНТР" },
  { src: "./project3.png", text: "ДОСУГОВЫЙ ЦЕНТР" },
  { src: "./project4.png", text: "ДОСУГОВЫЙ ЦЕНТР" },
  { src: "./project5.png", text: "ДОСУГОВЫЙ ЦЕНТР" },
];

const OurProjects = () => {
  return (
    <section className={styles.container}>
      <h2>Наши проекты</h2>
      <div className={styles.imageWrapper}>
        {projects.map((project, index) => (
          <div key={index} className={styles.image}>
            <img src={project.src} alt={`Project ${index}`} />
            <div className={styles.imageText}>
              <h2>{project.text}</h2>
              <Button
                text="ПОДРОБНЕЕ"
                color="#FFFFFF"
                arrowColor="#FFFFFF"
                background={"inherit"}
                nohover={true}
              />
            </div>
          </div>
        ))}
      </div>
      <Button
        text="ВСЕ ПРОЕКТЫ"
        background="#333333"
        color="#FFFFFF"
        arrowColor="#FFFFFF"
      />
    </section>
  );
};

export default OurProjects;
