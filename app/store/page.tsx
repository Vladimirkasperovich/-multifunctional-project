import styles from "./page.module.scss";
import { getAllProducts, StoreCard } from "@/features";

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
