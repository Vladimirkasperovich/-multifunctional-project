import React from "react";
import styles from "./text-field.module.scss";

export const TextField: React.FC = () => {
  return <input type="text" className={styles.input} />;
};
