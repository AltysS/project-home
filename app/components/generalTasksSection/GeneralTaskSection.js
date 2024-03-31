import styles from "./generalTaskSection.module.scss";

const ourTasks = [
  "Создание комфортных условий и повышение качества обслуживания клиентов",
  "Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке",
];

const GeneralTaskSection = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.slogan}>Основные задачи</h2>
      <div>
        {ourTasks.map((el, index) => (
          <div key={index} className={styles.itemWrapper}>
            <span>{index + 1}</span>
            <p>{el}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GeneralTaskSection;
