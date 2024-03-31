"use client";
import React, { useState } from "react";
import Logo from "@/app/assets/Logo";
import styles from "./desktopHeader.module.scss";
import MenuItems from "../menuItem/MenuItem";

const DesktopHeader = ({ menuItems }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <MenuItems activeTab={activeTab} menuItems={menuItems} />
    </div>
  );
};

export default DesktopHeader;
