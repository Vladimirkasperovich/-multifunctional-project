import React from 'react';
import styles from './header.module.scss';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({}) => {
  return (
    <header className={styles.main}>
      <div className={styles.block}>
        <Link href={`/`}>
          <h3 className={styles.making__future}>Main</h3>
        </Link>
        <h3 className={styles.sign__in}>Sign in</h3>
      </div>
    </header>
  );
};
