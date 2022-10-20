import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img className={styles.logoImage} src="/logo_whiteBorder.svg" />
                <span className={styles.logoTxt}>drink</span>
            </div>
            <img src="/burger.svg"/>
        </header>
    );
}

export default Header;