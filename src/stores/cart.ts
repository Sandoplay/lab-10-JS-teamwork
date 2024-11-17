import { defineStore } from 'pinia'
import type { Product } from '@/types/product'

interface CartItem extends Product {
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),

    totalAmount: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  },

  actions: {
    addToCart(product: Product) {
      const existingItem = this.items.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },

    removeFromCart(productId: number) {
      this.items = this.items.filter(item => item.id !== productId)
    },

    updateQuantity(productId: number, change: number) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.quantity = Math.max(1, item.quantity + change)
      }
    },

    clearCart() {
      this.items = []
    },
  },
})
