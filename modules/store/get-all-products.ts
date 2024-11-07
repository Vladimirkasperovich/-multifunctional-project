import { axiosInstance } from "./instance";
import { AllProducts } from "./types";

export const getAllProducts = async (): Promise<AllProducts[]> => {
  return (await axiosInstance.get<AllProducts[]>("/products")).data;
};
