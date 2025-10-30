<script setup>
import { ref } from 'vue'
import Header from '/src/components/Header.vue'
import Footer from '/src/components/Footer.vue'
import ProductCard from '/src/components/ProductCard.vue'
import ProductFilter from '/src/components/ProductFilter.vue'
import { products } from '/src/data/products'

const filteredProducts = ref(products)
</script>

<template>
    <Header />

    <div class="flex m-10">
        <aside class="w-1/4 p-10">
            <ProductFilter />
        </aside>

        <main class="w-3/4 p-6">
            <p class="text-sm ml-3 mb-2 text-gray-400">Home / Women</p>
            <h1 class="text-3xl mb-2 font-semibold ml-3">Women's Clothing & Apparel - New Arrivals</h1>
            <p class="text-lg ml-3 mb-10">Featured</p>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-13">
                <ProductCard v-for="p in filteredProducts" :key="p.id" :product="p" />
            </div>
        </main>
    </div>

    <Footer />
</template>

<style>

</style>