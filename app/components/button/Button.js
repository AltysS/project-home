import ArrowNext from "@/app/assets/ArrowNext";
import styles from "./button.module.scss";

const Button = ({ text, background, color, arrowColor, type }) => {
  return (
    <button type={type} className={styles.button} style={{ background, color }}>
      {text}
      <ArrowNext arrowColor={arrowColor} />
    </button>
  );
};

export default Button;
