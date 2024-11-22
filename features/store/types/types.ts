export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
}

interface ProductRating {
  rate: number;
  count: number;
}

export type AllCategories = 'electronics' | 'jewelery' | "men's clothing" | "women's clothing";
