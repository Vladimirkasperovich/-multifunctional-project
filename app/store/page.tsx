import styles from './page.module.scss';
import { Categories, getCategories } from '@/features';

export default async function StorePage() {
  const categories = await getCategories();
  return (
    <div className={styles.flex}>
      <Categories categories={categories} />
    </div>
  );
}
