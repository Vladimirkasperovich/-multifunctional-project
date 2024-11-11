import { axiosInstance } from "@/modules/store/instance";
import { Product } from "@/modules/store/types";

export const getSingleProduct = async (id: string): Promise<Product> => {
  return (await axiosInstance.get<Product>(`/products/${id}`)).data;
};
