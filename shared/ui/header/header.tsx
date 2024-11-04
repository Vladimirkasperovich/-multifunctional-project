import React from "react";
import styles from "./header.module.scss";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({}) => {
  return (
    <header className={styles.main}>
      <div className={styles.block}>
        <h3 className={styles.making__future}>Making future</h3>
        <h3 className={styles.sign__in}>Sign in</h3>
      </div>
    </header>
  );
};
