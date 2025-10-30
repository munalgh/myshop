<script setup>
import { RouterLink } from 'vue-router'
import Header from '/src/components/Header.vue'
import Footer from '/src/components/Footer.vue'
import { blogs } from '/src/data/blogs.js'
const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })

const progressList = [
    {title: 'Carbon Commitment', image: images['/src/assets/carboon.png']},
    {title: 'Environmental Initiatives', image: images['/src/assets/enviromental.png']},
    {title: 'Better Factories', image: images['/src/assets/factories.png']}
]
</script>

<template>
    <div>
    <Header />
    <br>
    <hr class="border-0 h-3 bg-black w-[95%] mx-auto mt-2" />
    <div class="m-5 px-12">
        <h1 class="text-[160px]">everworld</h1>
        <p>We’re on a mission to clean up a dirty industry. <br /> These are the people, stories, and ideas that will help us get there.</p>
    </div>
    <br>
    <br>
    <section>
        <div class="m-10 mt-10">
            <h1 class="m-5 mt-10 text-[50px] font-bold">The Latest</h1>
            <div class="m-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                <RouterLink v-for="blog in blogs" :key="blog.id" :to="{ name: 'BlogDetails', params: { id: blog.id } }" class="py-6 hover:scale-99 transition block">
                    <img :src="blog.image">
                    <p class="mb-5 text-[30px]">{{ blog.title }}</p>
                    <p class="inline-block text-[13px] border border-gray-400 rounded-full px-3 py-1">{{ blog.tag }}</p>
                </RouterLink>
            </div>
            <button class="bg-black text-white text-sm py-5 px-12 rounded-lg block mx-auto">Load More Articles</button>
        </div>
    </section>

    <div>
        <img src="/src/assets/textbanner.png" class="mt-10 mb-10">
    </div>

    <section class="m-10 mt-10">
        <h1 class="m-5 mt-10 text-[50px] font-bold">Our Progress</h1>
        <div class="m-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="(item, i) in progressList" :key="i">
                <img :src="item.image" class="mb-2 shadow-md" />
                <p class="text-lg">{{ item.title }}</p>
            </div>
        </div>
    </section>

    <section class="bg-[#cbc6b1] py-25 px-9">
        <div>
            <p class="text-[54px] font-bold text-[#1f1403]">Follow us on social for more</p>
            <a class="m-5 inline-block bg-[#533b24] text-[#eee7db] text-sm py-4 px-10 rounded-lg mx-auto">@Everlane Instagram</a>
        </div>
    </section>
    
    <Footer />
    </div>
</template>