<script setup>
const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })

const recommendation = [
    {title: 'Our Gift Picks', content: 'The best presents for everyone on your list.', image: images['/src/assets/bunny.png']},
    {title: 'Cleaner Lifestyle', content: 'See the sustainability efforts behind each of our products.', image: images['/src/assets/robe.png']}
]
</script>

<template>
    <section>
        <div class="m-4 grid grid-cols-2 md:grid-cols-2">
            <div v-for="item in recommendation" :key="item.title" class="flex flex-col items-center text-center">
                <h2 class="font-bold text-xl mb-3">{{ item.title }}</h2>
                <img :src="item.image" class="w-[505px] h-[626px] rounded-lg shadow-2xl hover:scale-103 transition">
                <p class="mt-5">{{ item.content }}</p>
                <a href="" class="mt-2 text-sm underline text-gray-500">Read More</a>
            </div>
        </div>
    </section>
</template>