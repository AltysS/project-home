import styles from "./menuItems.module.scss";

const MenuItems = ({ menuItems, activeTab, handleClick }) => {
  return (
    <nav className={styles.menuNavigation}>
      <ul className={styles.menuItemList}>
        {menuItems.map((el, index) => (
          <li key={index} className={styles.menuItem}>
            <a
              onClick={handleClick}
              className={index === activeTab ? styles.activeItem : ""}
            >
              {el}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuItems;
