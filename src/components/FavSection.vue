<script setup>
const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })

const items = [
  {name: 'Hello Kitty Bedding', price: 40, image: images['/src/assets/hellokitty.png']},
  {name: 'Room Lamp', price: 25, image: images['/src/assets/lamp.png']},
  {name: 'Wood Bed Frame', price: 220, image: images['/src/assets/bed.png']},
  {name: 'Flowers Bed Sheets', price: 30, image: images['/src/assets/sheets.png']},
  {name: 'Throw Blanket', price: 45, image: images['/src/assets/blanket.png']}
]
</script>

<template>
    <section class="text-center py-8">
        <h2 class="text-2xl font-semibold mb-2 mt-4 text-center">Everlane Favorites</h2>
        <p class="text-sm text-center">Beautifully Functional, Purposefully Designed, Consciously Crafted</p>

        <div class="mt-8 flex overflow-x-auto space-x-6 px-6 justify-center">
            <div v-for="item in items" :key="item.name" class="mb-5 mt-4 flex-shrink-0 snap-center bg-[#f0ede9] shadow-md w-64 p-4 text-left hover:scale-110 transition">
            <img :src="item.image" class="w-full h-66 object-cover" />
            <p class="mt-4 font-semibold text-lg">{{ item.name }}</p>
            <p class="test-gray-600">${{ item.price }}</p>
        </div>
        </div>
        <div class="flex justify-center mt-8 space-x-3">
            <div class="w-2 h-2 mr-1 rounded-full bg-black"></div>
            <div class="w-2 h-2 mr-1 ml-1 rounded-full bg-gray-400"></div>
            <div class="w-2 h-2 mr-1 ml-1 rounded-full bg-gray-400"></div>
            <div class="w-2 h-2 mr-1 ml-1 rounded-full bg-gray-400"></div>
        </div>
    </section>
</template>