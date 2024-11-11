import React from "react";
import { AllProducts } from "@/modules/store/types";
import Image from "next/image";
import styles from "./store-card.module.scss";

interface Props {
  product: AllProducts;
}

export const StoreCard: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.main}>
      <h6 className={styles.title}>{product.title}</h6>
      <Image src={product.image} alt="product" width={50} height={50} />
    </div>
  );
};
