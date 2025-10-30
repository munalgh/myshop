<script setup>
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import ArrowButtonLeft from '/src/components/Icons/ArrowButtonLeft.vue'
import ArrowButtonRight from '/src/components/Icons/ArrowButtonRight.vue'
import SocialMediaIcons from '/src/components/Icons/SocialMediaIcons.vue'
import Header from '/src/components/Header.vue'
import Footer from '/src/components/Footer.vue'
import { blogs } from '/src/data/blogs.js'
const route = useRoute()
const blog = blogs.find(b => b.id === parseInt(route.params.id))
const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })

const winterItems = [
    {title: 'Appliquéd Flannel Duvet Bedding', price: 49, image: images['/src/assets/w1.png']},
    {title: 'Unique Cushion Covers', price: 25, image: images['/src/assets/w2.png']},
    {title: 'Bathroom Wooden Stool', price: 59, image: images['/src/assets/w3.png']},
    {title: 'Dark Coffee Table', price: 99, image: images['/src/assets/w4.png']},
    {title: 'Extra Fluffy Throw Blanket', price: 39, image: images['/src/assets/w5.png']}
]
</script>

<template>
  <div>
    <Header />

    <section>
        <div class="relative h-[77vh] overflow-hidden">
            <img :src="blog.image" class="w-full h-full object-cover" />
            <div class="absolute bottom-20 left-3 text-white px-4">
                <p class="inline-block bg-lime-300/20 text-[14px] rounded-full px-3 py-1 mb-4">{{ blog.tag }}</p>
                <h1 class="text-[64px] text-white/90 font-bold mb-2">{{ blog.title }}</h1>
                <p class="text-[20px]">Redefine your winter home with the timeless elegance of winter with this style guide.</p>
            </div>
        </div>
        <br><br>
        <hr class="border-0 h-3 bg-black w-[95%] mx-auto mt-2" />
        <div class="relative">
            <SocialMediaIcons class="absolute top-10 left-10" />
            <div v-for="(section, index) in blog.sections" :key="index" class="px-[300px] py-[10px] mb-6">
                <p v-if="section.type === 'paragraph'" class="text-lg leading-relaxed">{{ section.content }}</p>
                <h2 v-else-if="section.type === 'heading'" class="text-[30px] font-bold mt-6">{{ section.content }}</h2>
                <div v-else-if="section.type === 'image'" class="flex justify-center">
                    <img :src="section.src" class="w-[750px] h-[1000px] rounded-lg shadow-md" />
                </div>
            </div>
        </div>
    </section>
    <br>
    <section class="relative flex flex-col items-center text-center">
        <h1 class="text-3xl font-bold m-5">The Winter Essentials Edit</h1>

        <div class="relative w-full flex items-center justify-center mb-7">
            <button class="left-2 z-10 bg-white shadow rounded-full m-4 p-2 hover:bg-gray-100 transition">
            <ArrowButtonLeft />
            </button>

            <div class="flex gap-5 overflow-hidden">
                <div v-for="(item, i) in winterItems" :key="i" class="mb-5 mt-4 flex-shrink-0 snap-center bg-[#f0ede9] shadow-md w-64 p-4 text-left hover:scale-110 transition">
                    <img :src="item.image" class="w-full h-66 object-cover">
                    <p class="mt-4 font-semibold text-lg">{{ item.title }}</p>
                    <p class="test-gray-600">${{ item.price }}</p>
                </div>
            </div>

            <button class="right-2 z-10 bg-white shadow rounded-full m-4 p-2 hover:bg-gray-100 transition">
            <ArrowButtonRight />
            </button>
        </div>
        <button class="m-5 bg-black text-white text-sm py-5 px-12 rounded-lg block mx-auto">Shop Now</button>
    </section>
    <br>
    <section>
        <h2 class="text-2xl font-bold px-6 mb-3">You might also like</h2>
        <div class="m-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            <RouterLink v-for="blog in blogs.slice(0, 3)" :key="blog.id" :to="{ name: 'BlogDetails', params: { id: blog.id } }" class="hover:scale-103 transition block">
                <img :src="blog.image" class="w-full h-64 object-cover rounded-lg mb-3" />
                <p class="mb-3 text-[24px] font-semibold">{{ blog.title }}</p>
                <p class="inline-block text-[12px] border border-gray-400 rounded-full px-2 py-1">{{ blog.tag }}</p>
            </RouterLink>
        </div>
    </section>
    <br>
    <Footer />
  </div>
</template>
