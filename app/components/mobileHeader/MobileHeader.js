"use client";
import React, { useState } from "react";
import Logo from "@/app/assets/Logo";
import styles from "./mobileHeader.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItems from "../menuItem/MenuItem";
import CloseIcon from "@mui/icons-material/Close";

const MobileHeader = ({ menuItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div onClick={handleMenu}>
        <MenuIcon />
      </div>
      {menuOpen && (
        <>
          <div
            className={styles.overlay}
            onClick={() => setMenuOpen(false)}
          ></div>
          <div
            className={`${styles.menuWrapper} ${
              menuOpen ? styles.menuOpen : ""
            }`}
          >
            <div>
              <CloseIcon onClick={handleMenu} />
            </div>
            <MenuItems activeTab={activeTab} menuItems={menuItems} />
          </div>
        </>
      )}
    </div>
  );
};

export default MobileHeader;
