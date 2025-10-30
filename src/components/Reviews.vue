<script setup>
import StarIcon from './Icons/StarIcon.vue'
</script>

<template>
    <section class="relative flex flex-col items-center text-center">
        <div class="relative w-full flex items-center justify-center mb-7">
            <button class="absolute left-2 z-10 bg-white shadow rounded-full m-4 p-2 hover:bg-gray-100 transition">
            <ArrowButtonLeft />
            </button>

        <div class="m-20 grid grid-cols-2 md:grid-cols-2">
            <div class="m-5 flex justify-center flex-col text-left">
            <h2 class="font-bold mb-3">People Are Talking</h2>
            <StarIcon :count="5" />
            <blockquote  class="mt-5 text-2xl">“Love their new collection! Fits perfectly in my room and the quality is amazing.”</blockquote >
            <p class="mt-5">-- Hello Kitty, <span class="underline">Figurative Pile Cushion.</span></p>
            </div>
            <div class="flex flex-col items-center">
            <img src="/src/assets/6.png" class="w-[530px] h-[695px] rounded-lg shadow-2xl hover:scale-103 transition">
            </div>
        </div>

            <button class="absolute right-2 z-10 bg-white shadow rounded-full m-4 p-2 hover:bg-gray-100 transition">
            <ArrowButtonRight />
            </button>
        </div>
        <div class="flex justify-center mb-8 sopace-x-3">
            <div class="w-2 h-2 mr-1 rounded-full bg-black"></div>
            <div class="w-2 h-2 mr-1 ml-1 rounded-full bg-gray-400"></div>
            <div class="w-2 h-2 mr-1 ml-1 rounded-full bg-gray-400"></div>
            <div class="w-2 h-2 mr-1 ml-1 rounded-full bg-gray-400"></div>
        </div>
    </section>
</template>