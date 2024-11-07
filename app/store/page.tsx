import { getAllProducts, StoreCard } from "@/modules";

export default async function StorePage() {
  const allProducts = await getAllProducts();

  return allProducts.map((product) => (
    <StoreCard key={product.id} product={product} />
  ));
}
