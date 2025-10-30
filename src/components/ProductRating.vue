<script setup>
import StarIcon from '/src/components/Icons/StarIcon.vue'
</script>

<template>
    <h1 class="text-[24px] font-bold text-center mb-6">Reviews</h1>
    <section class="mx-auto m-4 grid grid-cols-3 gap-10 justify-between w-[1200px] h-[300px] bg-[#F5F4F4] p-8">
        <div class="flex flex-col items-center justify-center">
            <p class="font-semibold text-lg mb-2">4.0 Overall Rating</p>
            <div class="flex gap-1">
                <StarIcon :count="4" />
            </div>
        </div>
        <div class="flex flex-col justify-center text-sm">
            <div v-for="(count, index) in [2,1,1,0,0]" :key="index" class="flex items-center gap-2 mb-1">
            <div class="flex items-center gap-1">
                <StarIcon :count="1" class="w-4 h-4" />
                <span>{{ 5 - index }}</span>
            </div>
            <div class="w-50 h-2 bg-gray-300">
                <div class="h-2 bg-black" :style="{ width: count > 0 ? `${(count / 2) * 100}%` : '0%' }"></div>
            </div>
            <span class="w-4 text-right">{{ count }}</span>
            </div>
        </div>
        <div class="flex flex-col justify-center items-start text-left">
            <p class="font-semibold mb-2">Runs slightly large</p>
            <div class="flex items-center gap-2">
                <div class="flex justify-between w-50">
                    <div class="m-1 h-1.5 w-7/5 bg-gray-300"></div>
                    <div class="m-1 h-1.5 w-7/5 bg-gray-300"></div>
                    <div class="m-1 h-1.5 w-7/5 bg-gray-300"></div>
                    <div class="m-1 h-1.5 w-7/5 bg-black"></div>
                    <div class="m-1 h-1.5 w-7/5 bg-gray-300"></div>
                </div>
            </div>
            <div class="flex justify-between text-xs w-48 mt-1 text-gray-600">
                <span>Run small</span>
                <span>Run large</span>
            </div>
      </div>
    </section>
</template>