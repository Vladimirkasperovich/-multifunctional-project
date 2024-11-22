import React from 'react';
import { AllCategories } from '@/features/store/types/types';
import styles from './categories.module.scss';

interface Props {
  categories: AllCategories[];
}

export const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <div className={styles.categoriesContainer}>
      <ul className={styles.categoriesList}>
        {categories.map((category) => (
          <li key={crypto.randomUUID()} className={styles.categoryItem}>
            <h1 className={styles.categoryName}>{category}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};
