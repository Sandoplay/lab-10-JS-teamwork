// src/types/filter.ts
export interface ProductFilter {
  title: string;      // Прибираємо опціональність
  category: string;   // Прибираємо опціональність
  minPrice: number;   // Прибираємо опціональність
  maxPrice: number;   // Прибираємо опціональність
  page: number;
  limit: number;
}
