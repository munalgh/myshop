<script setup>
import ArrowButtonRight from './Icons/ArrowButtonRight.vue'
import ArrowButtonLeft from './Icons/ArrowButtonLeft.vue'

const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })
const reviews = [
    {image: images['/src/assets/1.png']},
    {image: images['/src/assets/2.png']},
    {image: images['/src/assets/3.png']},
    {image: images['/src/assets/4.png']},
    {image: images['/src/assets/5.png']}
]
</script>

<template>
    <section class="relative flex flex-col items-center text-center">
        <h1 class="text-3xl font-bold m-5">Everlane On You</h1>
        <p class="text-sm">Share your latest interior with 
        <span class="font-bold text-blue-300 underline">#EverlaneWithYou</span> for a chance to be featured.</p>
        <a href="#" class="mb-5 text-sm underline text-gray-500">Add Your Photo</a>

        <div class="relative w-full flex items-center justify-center mb-7">
            <button class="absolute left-2 z-10 bg-white shadow rounded-full m-4 p-2 hover:bg-gray-100 transition">
            <ArrowButtonLeft />
            </button>

            <div class="flex gap-5 overflow-hidden">
            <div v-for="review in reviews" :key="review.i" class="flex-shrink-0">
                <img :src="review.image" class="w-[225px] h-[225px] object-cover rounded-sm" />
            </div>
            </div>

            <button class="absolute right-2 z-10 bg-white shadow rounded-full m-4 p-2 hover:bg-gray-100 transition">
            <ArrowButtonRight />
            </button>
        </div>
    </section>
</template>