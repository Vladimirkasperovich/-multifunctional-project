import React from "react";
import { sidebarItems } from "@/shared";
import Link from "next/link";
import styles from "./sidebar.module.scss";

// interface Props {
//   // className?: string;
// }

export const Sidebar: React.FC = () => {
  return (
    <nav className={styles.main}>
      <ul className={styles.block}>
        {sidebarItems.map((item) => (
          <li key={item.id} className={styles.element}>
            <item.icon width={30} height={30} color={item.color} />
            <Link href={item.value.toLowerCase()}> {item.value}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
