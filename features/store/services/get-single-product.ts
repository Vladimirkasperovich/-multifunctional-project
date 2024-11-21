import { axiosInstance } from "./instance";
import { Product } from "@/features/store/types/types";

export const getSingleProduct = async (id: string): Promise<Product> => {
  return (await axiosInstance.get<Product>(`/products/${id}`)).data;
};
