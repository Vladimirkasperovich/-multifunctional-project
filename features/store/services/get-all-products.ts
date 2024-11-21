import { axiosInstance } from "./instance";
import { Product } from "../types/types";

export const getAllProducts = async (): Promise<Product[]> => {
  return (await axiosInstance.get<Product[]>("/products")).data;
};
