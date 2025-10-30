<script setup>
const promoSection = [
    {title: 'New Arrivals', tag: 'SHOP THE LATEST', image: '/src/assets/new.png'},
    {title: 'Best-Sellers', tag: 'SHOP YOUR FAVORITES', image: '/src/assets/best.png'},
    {title: 'The Holiday Season', tag: 'SHOP OCCASION', image: '/src/assets/holiday.png'}
]
</script>

<template>
    <div class="m-4 p-10 grid grid-cols-1 md:grid-cols-3 gap-7">
        <div v-for="item in promoSection" :key="item.title" class="relative">
            <img :src="item.image" class="rounded-lg mb-2">
            <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 class="text-xl md:text-4xl font-semibold mb-4">{{ item.title }}</h2>
                <button class="bg-white text-black px-6 py-3 text-sm hover:bg-gray-200 transition">{{ item.tag }}</button>
            </div>
        </div>
    </div>
</template>