import React from "react";
import { AllProducts } from "@/modules/store/types";
import Image from "next/image";
interface Props {
  product: AllProducts;
}

export const StoreCard: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <Image src={product.image} alt="product" width={50} height={50} />
    </div>
  );
};
