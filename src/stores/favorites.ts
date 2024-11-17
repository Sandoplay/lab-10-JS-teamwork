import { defineStore } from 'pinia'
import type { Product } from '@/types/product'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    items: [] as Product[],
  }),

  actions: {
    toggleFavorite(product: Product) {
      const index = this.items.findIndex(item => item.id === product.id)
      if (index === -1) {
        this.items.push(product)
      } else {
        this.items.splice(index, 1)
      }
    },

    isFavorite(productId: number): boolean {
      return this.items.some(item => item.id === productId)
    },
  },
})
