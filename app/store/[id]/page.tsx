import { getAllProducts, getProduct } from '@/features';
import Image from 'next/image';
import styles from './page.module.scss';

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function Product({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{product.title}</h1>
      <Image src={product.image} alt={'image'} height={200} width={200} />
      <p className={styles.description}>{product.description}</p>
      <h2 className={styles.price}>{product.price}$</h2>
    </div>
  );
}
