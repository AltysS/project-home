import MobileHeader from "@/app/components/mobileHeader/MobileHeader";
import styles from "./header.module.scss";
import DesktopHeader from "@/app/components/desktopHeader/DesktopHeader";

export const menuTabs = [
  "Главная",
  "Галерея",
  "Проекты",
  "Сертификаты",
  "Контакты",
];

const Header = () => {
  return (
    <header className={styles.header}>
      <MobileHeader menuItems={menuTabs} />
      <DesktopHeader menuItems={menuTabs} />
    </header>
  );
};

export default Header;
