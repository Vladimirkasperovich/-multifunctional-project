import React from "react";
import { sidebarItems } from "@/shared";
import styles from "./sidebar.module.scss";

// interface Props {
//   // className?: string;
// }

export const Sidebar: React.FC = ({}) => {
  return (
    <nav className={styles.main}>
      <ul className={styles.block}>
        {sidebarItems.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </nav>
  );
};
