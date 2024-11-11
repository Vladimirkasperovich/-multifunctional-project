import { getAllProducts, StoreCard } from "@/modules";
import styles from "./page.module.scss";

export default async function StorePage() {
  const allProducts = await getAllProducts();

  return (
    <div className={styles.flex}>
      {allProducts.map((product) => (
        <StoreCard key={product.id} product={product} />
      ))}
    </div>
  );
}
