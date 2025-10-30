import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const isOpen = ref(false)

  const subtotal = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )

  function addToCart(product) {
    const existing = items.value.find(i => i.id === product.id)
    if (existing) existing.quantity++
    else items.value.push({ ...product, quantity: 1 })
    isOpen.value = true
  }

  function removeFromCart(id) {
    items.value = items.value.filter(i => i.id !== id)
  }

  function toggleCart() {
    isOpen.value = !isOpen.value
  }

  return { items, subtotal, isOpen, addToCart, removeFromCart, toggleCart }
})
