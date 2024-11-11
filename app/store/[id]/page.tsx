import styles from "./page.module.scss";

import { getSingleProduct } from "@/modules";
import Image from "next/image";

export default async function Product({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getSingleProduct(String(id));

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{product.title}</h1>
      <Image src={product.image} alt={"image"} height={200} width={200} />
      <p className={styles.description}>{product.description}</p>
      <h2 className={styles.price}>{product.price}</h2>
    </div>
  );
}
