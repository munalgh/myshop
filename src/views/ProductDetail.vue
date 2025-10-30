<script setup>
import { useRoute } from 'vue-router'
import Header from '/src/components/Header.vue'
import Footer from '/src/components/Footer.vue'
import ProductRating from '/src/components/ProductRating.vue'
import ProductReview from '/src/components/ProductReview.vue'
import PricingInfo from '/src/components/PricingInfo.vue'
import StarIcon from '/src/components/Icons/StarIcon.vue'
import ShipPolicies from '/src/components/ShipPolicies.vue'
import FilterSortButton from '/src/components/FilterSortButton.vue'
import { products } from '/src/data/products'
import { useCartStore } from '/src/stores/cart'
import { getColorValue } from '/src/utils/colorUtils'
const cart = useCartStore()

const route = useRoute()
const product = products.find(p => p.id === parseInt(route.params.id))
</script>

<template>
  <Header /> 
  <div v-if="product" class="m-7 grid grid-cols-1 md:grid-cols-[1.7fr_1fr] gap-10 p-10">
    <div class="relative grid grid-cols-2 gap-4">
      <span v-if="product.discount" class="absolute top-2 left-2 bg-white text-red-700 text-xs px-2 py-1 shadow-sm">{{ product.discount }}% off</span>
      <img v-for="(img, i) in product.images" :key="i" :src="img" class="w-full object-cover" />
    </div>

    <div>
      <p class="text-sm mb-5 text-gray-500">Home / Women / Women - Clothing</p>
      <div class="flex justify-between items-start mb-6">
        <div>
          <h1 class="text-4xl">{{ product.name }}</h1>
          <div class="flex items-end justify-items-center gap-2">
            <StarIcon :count="5" class="mt-3 w-22"/>
            <p class="text-sm text-gray-500">5.0 (2 Reviews)</p>
          </div>
        </div>
        <div class="text-right">
          <span class="text-3xl font-semibold">${{ product.price }}</span>
          <span class="text-gray-500 line-through ml-2">${{ product.oldPrice }}</span>
        </div>
      </div>

      <div class="mb-6">
        <p class="text-sm font-semibold text-gray-600 mb-2">Color:</p>
        <div class="flex space-x-2">
          <span v-for="(color, i) in product.colors" :key="i" class="w-7 h-7 rounded-full border border-gray-500" :style="{ backgroundColor: getColorValue(color) }" :title="color"></span>
        </div>
      </div>

      <div class="flex justify-between">
        <p class="font-bold mb-4">Size:</p>
        <p class="underline text-sm text-gray-700">Size Guide</p>
      </div>
      <div class="flex flex-wrap gap-2 mb-15">
        <button class="bg-[#F5F4F4] px-4 py-2.5 text-[13px]">XXS</button>
        <button class="bg-[#F5F4F4] px-4 py-2.5 text-[13px]">XS</button>
        <button class="bg-[#F5F4F4] px-4 py-2.5 text-[13px]">S</button>
        <button class="bg-[#F5F4F4] px-4 py-2.5 text-[13px]">M</button>
        <button class="bg-[#F5F4F4] px-4 py-2.5 text-[13px]">L</button>
        <button class="bg-[#F5F4F4] px-4 py-2.5 text-[13px]">XL</button>
        <button class="bg-[#F5F4F4] px-4 py-2.5 text-[13px]">XXL</button>
        <button class="bg-[#F5F4F4] px-4 py-2.5 text-[13px]">XXXL</button>
      </div>

      <button @click="cart.addToCart(product)" class="bg-gray-950 text-white text-sm w-full py-3 hover:bg-gray-800 transition">ADD TO CART</button>

      <hr class="my-10">

      <ShipPolicies />
      
      <hr class="my-10">

        <h1 class="text-lg font-bold mb-4">{{ product.title }}</h1>
        <p class="text-gray-600 mb-4">{{ product.description }}</p>
        <br>
        <br>
        <div class="flex items-start gap-5">
            <h2 class="font-bold">Model</h2>
            <p>{{ product.modelSize }}</p>
        </div>

      <hr class="my-10">

        <div class="flex items-start gap-12">
            <h2 class="font-bold">Fit</h2>
            <p>Questions about fit? <br> Contact Us <br> Size Guide</p>
        </div>

      <hr class="my-10">

        <div class="space-y-3">
            <h2 class="font-bold">Sustainability</h2>
            <img src="/src/assets/listing/sustainability.png">
        </div>

      <hr class="my-10">

    </div>
  </div>

    <div class="m-15 px-12">
        <h1 class="text-2xl font-bold mb-6">Recommended Products</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div v-for="(product, i) in products.slice(4, 8)" :key="i" class="block flex-col items-center">
            <img :src="product.images[2]" class="w-full object-cover rounded-md hover:shadow-md" />
            <div class="flex justify-between items-start">
                <div>
                    <h2 class="text-md text-gray-600 mt-5">{{ product.name }}</h2>
                    <p class="text-[12px] text-gray-500">{{ product.color }}</p>
                </div>
                <div class="text-right mt-5">
                    <span class="text-md font-semibold">${{ product.price }}</span>
                    <span class="text-gray-400 line-through text-[12px] block">${{ product.oldPrice }}</span>
                </div>
            </div>
            </div>
        </div>
    </div>

    <ProductRating />

    <FilterSortButton />

    <ProductReview />
    <br>
    <PricingInfo />

  <Footer />
</template>
