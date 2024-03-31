"use client";
import Logo from "@/app/assets/Logo";
import MenuItems from "@/app/components/menuItem/MenuItem";
import { menuTabs } from "../header/Headet";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import styles from "./footer.module.scss";
import DecorationLine from "@/app/components/decorationLine/DecorationLine";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div>
          <Logo color="#ffff" />
        </div>
        <div>
          <h2 className={styles.title}>Информация</h2>
          <MenuItems menuItems={menuTabs} />
        </div>
        <div className={styles.contacts}>
          <h2 className={styles.title}>Контакты</h2>
          <div>
            <p>
              <LocationOnOutlinedIcon color="#ffff" />
              100000, Республика Казахстан, г. Караганда, ул. Телевизионная 10
            </p>
          </div>
          <div>
            <p>
              <LocalPhoneOutlinedIcon color="#ffff" />
              +38 (000) 000 00 00
            </p>
          </div>
          <div>
            <p>
              <MailOutlineOutlinedIcon color="#ffff" />
              mail@gmail.com
            </p>
          </div>
        </div>
        <div>
          <h2 className={styles.title}>Социальные сети</h2>
          <div className={styles.socialIconsWrapper}>
            <FacebookOutlinedIcon color="#ffff" />
            <TwitterIcon color="#ffff" />
            <LinkedInIcon color="#ffff" />
            <PinterestIcon color="#ffff" />
          </div>
        </div>
      </div>
      <DecorationLine />
      <p className={styles.copyRight}>
        © 2019 Digital Project. Все права защищены.
      </p>
    </footer>
  );
};

export default Footer;
