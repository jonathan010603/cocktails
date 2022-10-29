import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img className={styles.logoImage} src="/logotxt.svg" />
            </div>
            <img className={styles.burger} src="/burger.svg"/>
        </header>
    );
}

export default Header;