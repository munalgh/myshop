<script setup>
import { RouterLink } from 'vue-router'
import { getColorValue } from '/src/utils/colorUtils'

defineProps({
product: {type: Object, required: true}
})
</script>

<template>
  <RouterLink :to="`/product/${product.id}`" class="p-2 group block hover:shadow-lg transition-shadow">
    <div class="relative">
        <span v-if="product.discount" class="absolute top-2 left-2 bg-white text-red-700 text-xs px-2 py-1 shadow-sm">{{ product.discount }}% off</span>
        <img :src="product.images[0]" class="w-[329px] h-[392px] object-cover" />
    </div>

    <div class="mt-3 flex justify-between items-start">
        <div>
            <h2 class="text-md text-gray-600 my-5">{{ product.name }}</h2>
            <div class="flex space-x-2 mt-1">
              <span v-for="(color, i) in product.colors" :key="i" class="w-5 h-5 rounded-full border border-gray-500" :style="{ backgroundColor: getColorValue(color) }" :title="color"></span>
            </div>
        </div>
    </div>

    <div class="text-right mt-5">
        <span class="text-md font-semibold">${{ product.price }}</span>
        <span class="text-gray-400 line-through text-[12px] block">${{ product.oldPrice }}</span>
    </div>
  </RouterLink>
</template>
