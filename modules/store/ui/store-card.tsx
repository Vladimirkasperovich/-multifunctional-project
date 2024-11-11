import React from "react";
import { Product } from "@/modules/store/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./store-card.module.scss";

interface Props {
  product: Product;
}

export const StoreCard: React.FC<Props> = ({ product }) => {
  return (
    <Link href={`store/${product.id}`}>
      <div className={styles.main}>
        <span className={styles.title}>{product.title}</span>
        <Image src={product.image} alt="product" width={100} height={100} />
        <p className={styles.description}>{product.description}</p>
        <span className={styles.price}>{product.price}$</span>
      </div>
    </Link>
  );
};
