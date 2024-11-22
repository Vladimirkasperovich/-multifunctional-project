import { axiosInstance } from '@/features/store/services/instance';
import { AllCategories } from '@/features/store/types/types';

export const getCategories = async (): Promise<AllCategories[]> => {
  return (await axiosInstance.get<AllCategories[]>('products/categories')).data;
};
