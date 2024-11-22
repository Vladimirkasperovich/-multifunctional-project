import React from 'react';
import { AllCategories } from '@/features/store/types/types';
import styles from './categories.module.scss';

interface Props {
  categories: AllCategories[];
}

export const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <div className={styles.main}>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};
