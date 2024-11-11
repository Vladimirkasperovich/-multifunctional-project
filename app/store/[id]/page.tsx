// import { React } from "react";
// import styles from "./page.module.scss";

import { getSingleProduct } from "@/modules";
import Image from "next/image";

export default async function Product({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getSingleProduct(String(id));

  return (
    <div>
      <h1>{product.title}</h1>
      <Image src={product.image} alt={"image"} height={200} width={200} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
