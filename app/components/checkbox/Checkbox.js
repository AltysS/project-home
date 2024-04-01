import styles from "./checkbox.module.scss";

const Checkbox = ({ required }) => (
  <label className={styles.customCheckbox}>
    <input name="checkbox" required={required} type="checkbox" />
    <span className={styles.checkmark}></span>
  </label>
);

export default Checkbox;
