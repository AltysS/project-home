import styles from "./menuItems.module.scss";

const MenuItems = ({ menuItems, activeTab }) => {
  return (
    <nav className={styles.menuNavigation}>
      <ul className={styles.menuItemList}>
        {menuItems.map((el, index) => (
          <li key={index} className={styles.menuItem}>
            <a className={index === activeTab ? styles.activeItem : ""}>{el}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuItems;
