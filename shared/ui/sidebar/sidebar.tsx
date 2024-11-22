'use client';
import React from 'react';
import { sidebarItems } from '@/shared';
import Link from 'next/link';
import styles from './sidebar.module.scss';

export const Sidebar: React.FC = () => {
  return (
    <nav className={styles.main}>
      <ul className={styles.block}>
        {sidebarItems.map((item) => (
          <li key={item.id} className={styles.element}>
            <item.icon width={24} height={24} color={item.color} />
            <Link href={`/${item.value.toLowerCase()}`} className={styles.link} replace>
              {item.value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
