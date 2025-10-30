<script setup>
defineProps({
    title: String,
    highlights: Array,
    featured: Array,
    images: Array
})
</script>

<template>
    <transition>
        <div class="absolute top-full w-full mt-15 bg-[#faf8f9] shadow-lg py-9 z-50 border border-gray-400">
            <div class="max-w-6xl m-5 mx-auto grid grid-cols-4 gap-8 px-10">
                <div>
                    <h3 class="uppercase text-xs text-gray-400 mb-5">Highlights</h3>
                    <ul class="space-y-2">
                        <li v-for="item in highlights" :key="item" class="text-sm text-gray-500 mb-3 hover:underline">{{ item }}</li>
                    </ul>
                </div>
                <div>
                    <h3 class="uppercase text-xs text-gray-400 mb-5">Featured Shops</h3>
                    <ul class="space-y-2">
                        <li v-for="item in featured" :key="item" class="text-sm text-gray-500 mb-3 hover:underline">{{ item }}</li>
                    </ul>
                </div>
                <div class="col-span-2 flex gap-5 mb-5">
                    <div v-for="(img, i) in images" :key="i" class="relative group w-1/2">
                        <img :src="img.src" class="w-[270px] h-[270px] object-cover shadow-sm border border-gray-200">
                        <div class="absolute text-[22px] text-white text-shadow-sm/20 inset-0 flex items-end justify-start p-4">
                            <p>{{ img.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style>

</style>